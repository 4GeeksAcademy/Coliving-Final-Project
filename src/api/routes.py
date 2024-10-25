"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import Property, db, User, ContactMessage
from api.models import Property, db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity, jwt_required
from werkzeug.security import check_password_hash, generate_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# Register ENDPOINT

@api.route("/register", methods=["POST"])
def register():
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    type_user = request.json.get("type_user", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Validar que todos los campos requeridos estén presentes
    if not all([first_name, last_name, type_user, email, password]):
        return jsonify({"msg": "Todos los campos son obligatorios."}), 400

    # Verificar si el usuario ya existe
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"msg": "El correo electrónico ya está en uso."}), 409

    # Crear un nuevo usuario
    new_user = User(
        first_name=first_name,
        last_name=last_name,
        type_user=type_user,
        email=email,
        password=generate_password_hash(password),  # Hash de la contraseña
    )

    # Agregar el nuevo usuario a la base de datos
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "Usuario creado exitosamente.", "user_id": new_user.id}), 201

# Login ENDPOINT

@api.route("/login", methods=["POST"])
def login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email == None or password == None:
        return jsonify({"msg": "Houston we've got a problem, it seems that you forgot to enter your email or password"}), 401

    user = User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"msg": "We couldn't find your email, but we've got a feeling it's out there having a good time. Join us and create your own adventure!"}), 404

    if check_password_hash(user.password, password):
        acces_token = create_access_token(identity=email)
        return jsonify({
            "token": acces_token,
            "user": user.serialize()
        }), 200
    else:
        return jsonify({"msg": "Houston we've got a problem, it seems that your password is incorrect"}), 401


@api.route('/property', methods=['POST'])
def create_property():
    try:
        body = request.get_json()

        if body is None:    
            return jsonify({"msg": "Please send a request body"}), 400
    
        required_fields = ['name', 'price', 'address', 'files', 'stay', 'description', 'rules', 'laundry', 'parking', 'air_conditioning', 'is_cancelable', 'floor_type', 'rooms_number', 'restrooms', 'beds']
        for field in required_fields:
            if field not in body:
             return jsonify({"msg": f"Please provide the {field} field"}), 400

        new_property = Property(
            name=body['name'],
            price=body['price'],
            address=body['address'],
            files=body['files'],
            stay=body['stay'],
            description=body['description'],
            rules=body['rules'],
            laundry=body['laundry'],
            parking=body['parking'],
            air_conditioning=body['air_conditioning'],
            is_cancelable=body['is_cancelable'],
            floor_type=body['floor_type'],
            rooms_number=body['rooms_number'],
            restrooms=body['restrooms'],
            beds=body['beds']
        )
    
        db.session.add(new_property)
        db.session.commit()
        return jsonify(new_property.serialize()), 200
    except Exception as e:
        return jsonify({"msg": str(e)}), 500
    
@api.route('/property', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    properties = [ property.serialize() for property in properties ]

    return jsonify(properties), 200   

# Endpoint para obtener una propiedad específica por ID
@api.route('/property/<int:property_id>', methods=['GET'])
def get_property(property_id):
    try:
        # Busca la propiedad por su ID
        property = Property.query.get(property_id)
        
        # Si no se encuentra, devuelve un error 404
        if property is None:
            return jsonify({"msg": "Property not found"}), 404

        # Devuelve la propiedad serializada en formato JSON
        return jsonify(property.serialize()), 200

    except Exception as e:
        return jsonify({"msg": str(e)}), 500

@api.route('/contact', methods=['POST'])
def contact_host():
    try:
        body = request.get_json()

        if body is None:
            return jsonify({"msg": "Please send a request body"}), 401

        required_fields = ['guest_name', 'email', 'message', 'budget', 'host_id']
        for field in required_fields:
            if field not in body:
                return jsonify({"msg": f"Please provide the {field} field"}), 402

        new_message = ContactMessage(
            guest_name=body['guest_name'],
            email=body['email'],
            phone=body.get('phone', None),  # El teléfono es opcional
            message=body['message'],
            budget=body['budget'],
            host_id=body['host_id']  # Asegúrate de recibir el `host_id`
        )

        db.session.add(new_message)
        db.session.commit()

        return jsonify(new_message.serialize()), 200

    except Exception as e:
        return jsonify({"msg": str(e)}), 500
    

@api.route('/user', methods=['POST'])
def post_user():
    body = request.get_json()
    exist_user = User.query.filter_by(email=body["email"]).first()
    if exist_user:
        return jsonify({"msg":"Ya existe el usuario"}), 404

    new_user=User(
        email=body["email"],
        password=body["password"],
        first_name=body["first_name"],
        last_name=body["last_name"],
        type_user=body["type_user"],
        phone=body["phone"],
        identity_document=body["identity_document"],
        address=body["address"],
        emergency_phone=body["emergency_phone"]
    ) 
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg":"El usuario fue creado"}), 201


 
@api.route('/user', methods=['GET'])
@jwt_required()
def get_user_logged():
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    return jsonify(user.serialize()), 200


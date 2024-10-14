"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# Login ENDPOINT

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email == None or password == None:
        return jsonify({"msg": "Houston we've got a problem, it seems that you forgot to enter your email or password"}), 401

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "We couldn't find your username, but we've got a feeling it's out there having a good time. Join us and create your own adventure!"}), 404

    if user.password != password:
        return jsonify({"msg": "This key (password) doesn't open the door, please try again"}), 401
    
    acces_token = create_access_token(identity=email)

    return jsonify({
        "token": acces_token,
        "user": user.serialize()
    }), 200
        
 
# @jwt_required()
# @api.route('/user', methods=['GET'])
# def get_user_logged():
#     email = get_jwt_identity()
#     user = User.query.filter_by(email=email).first()
#     return jsonify(user.serialize()), 200


from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(360), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    type_user = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=False)
    identity_document = db.Column(db.String(20), unique=False)
    address = db.Column(db.String(80), unique=False)
    emergency_phone = db.Column(db.String(20), unique=False)
 

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "type_user": self.type_user,
            "phone": self.phone,
            "identity_document": self.identity_document,
            "address": self.address,
            "emergency_phone": self.emergency_phone

            # do not serialize the password, its a security breach
        }
    
class Property(db.Model):
    __tablename__ = 'property'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(80), unique=False, nullable=False)
    files = db.Column(db.String(80), unique=False, nullable=False)
    stay = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    rules = db.Column(db.String(80), unique=False, nullable=False)
    laundry = db.Column(db.Boolean(), unique=False, nullable=False)
    parking = db.Column(db.Boolean(), unique=False, nullable=False)
    air_conditioning = db.Column(db.Boolean(), unique=False, nullable=False)
    is_cancelable = db.Column(db.Boolean(), unique=False, nullable=False)
    floor_type = db.Column(db.String(80), unique=False, nullable=False)
    rooms_number = db.Column(db.Integer, unique=False, nullable=False)
    restrooms = db.Column(db.Integer, unique=False, nullable=False)
    beds = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

   

    def __init__(self, name, price, address, files, stay, description, rules, laundry, parking, air_conditioning, is_cancelable, floor_type, rooms_number, restrooms, beds):
        self.name = name
        self.price = price
        self.address = address
        self.files = files
        self.stay = stay
        self.description = description
        self.rules = rules
        self.laundry = laundry
        self.parking = parking
        self.air_conditioning = air_conditioning
        self.is_cancelable = is_cancelable
        self.floor_type = floor_type
        self.rooms_number = rooms_number
        self.restrooms = restrooms
        self.beds = beds


    def __repr__(self):
        return f'<Property {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "address": self.address,
            "files": self.files,
            "stay": self.stay,
            "description": self.description,
            "rules": self.rules,
            "laundry": self.laundry,
            "parking": self.parking,
            "air_conditioning": self.air_conditioning,
            "is_cancelable": self.is_cancelable,
            "floor_type": self.floor_type,
            "rooms_number": self.rooms_number,
            "restrooms": self.restrooms,
            "beds": self.beds

        }
    
class ContactMessage(db.Model):
    __tablename__ = 'contact_message'

    id = db.Column(db.Integer, primary_key=True)
    guest_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    message = db.Column(db.Text, nullable=False)
    budget = db.Column(db.String(50), nullable=True)
    host_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # Clave foránea hacia la tabla `user`
    host = db.relationship('User', backref='messages')

    def __init__(self, guest_name, email, phone, message, budget, host_id):
        self.guest_name = guest_name
        self.email = email
        self.phone = phone
        self.message = message
        self.budget = budget
        self.host_id = host_id

    def serialize(self):
        return {
            "id": self.id,
            "guest_name": self.guest_name,
            "email": self.email,
            "phone": self.phone,
            "message": self.message,
            "budget": self.budget,
            "host_id": self.host_id
        }

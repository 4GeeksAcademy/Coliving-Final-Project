from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(80), unique=False, nullable=False)
    files = db.Column(db.String(80), unique=False, nullable=False)
    stay = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    rules = db.Column(db.String(80), unique=False, nullable=False)
    laundry = db.Column(db.Boolean(), unique=False, nullable=False)
    parcking = db.Column(db.Boolean(), unique=False, nullable=False)
    air_conditioning = db.Column(db.Boolean(), unique=False, nullable=False)
    is_cancelable = db.Column(db.Boolean(), unique=False, nullable=False)
    floor_type = db.Column(db.String(80), unique=False, nullable=False)
    rooms_number = db.Column(db.Integer, unique=False, nullable=False)
    restrooms = db.Column(db.Integer, unique=False, nullable=False)
    beds = db.Column(db.Integer, unique=False, nullable=False)

    def __init__(self, name, price, address, files, stay, description, rules, laundry, parcking, air_conditioning, is_cancelable, floor_type, rooms_number, restrooms, beds):
        self.name = name
        self.price = price
        self.address = address
        self.files = files
        self.stay = stay
        self.description = description
        self.rules = rules
        self.laundry = laundry
        self.parcking = parcking
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
            "parcking": self.parcking,
            "air_conditioning": self.air_conditioning,
            "is_cancelable": self.is_cancelable,
            "floor_type": self.floor_type,
            "rooms_number": self.rooms_number,
            "restrooms": self.restrooms,
            "beds": self.beds

        }
    
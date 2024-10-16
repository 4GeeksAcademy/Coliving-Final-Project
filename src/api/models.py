from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
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


    def __init__(self, name, price, address, files, stay, description, rules):
        self.name = name
        self.price = price
        self.address = address
        self.files = files
        self.stay = stay
        self.description = description
        self.rules = rules

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
            "rules": self.rules
        }
    
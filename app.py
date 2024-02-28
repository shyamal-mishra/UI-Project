from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/database'
db = SQLAlchemy(app)

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    photo_data = db.Column(db.LargeBinary)

@app.route('/')
def index():
    return render_template('upload_photo.html')

@app.route('/upload', methods=['POST'])
def upload():
    photo = request.files['photo']
    new_photo = Photo(photo_data=photo.read())
    db.session.add(new_photo)
    db.session.commit()
    return 'Photo uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)

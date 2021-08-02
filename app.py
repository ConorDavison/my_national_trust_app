import os
from flask import (
     Flask, flash, render_template,
     redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/the_sites")
def the_sites():
    sites = mongo.db.sites.find()
    return render_template('sites.html', sites=sites)


@app.route("/home")
def home():
    if "user" in session:
        user = mongo.db.users.find_one(
            {'username': session['user']})

        return render_template('index.html')

    else:

        return render_template('index.html')


@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # establish if user already exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash('This Username is taken, try another..')
            return redirect(url_for('register'))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        # put user into 'session' cookie
        session['user'] = request.form.get("username").lower()
        flash("You have successfully registered, welcome..")
    return render_template('register.html')


@app.route('/home', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            if check_password_hash(
                existing_user['password'], request.form.get('password')):
                session["user"] = request.form.get("username").lower()
                flash(
                    "Welcome {}, hope you're well".format(
                        request.form.get("username")))
            else: 
                flash('Username and/or Password is incorrect')
                return redirect(url_for('login'))

        else:
            flash("Username and/or Password is incorrect")
            return redirect(url_for('login'))
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
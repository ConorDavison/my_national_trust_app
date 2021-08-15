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
@app.route("/home")
def home():
    if "user" in session:
        user = mongo.db.users.find_one(
            {'username': session['user']})

        return render_template('index.html')

    else:

        return render_template('index.html')


@app.route("/the_sites")
def the_sites():
    sites = list(mongo.db.sites.find())
    return render_template('sites.html', sites=sites)


@app.route("/search", methods=["GET", "POST"])
def search():
    query = request.form.get("query")
    sites = list(mongo.db.sites.find({"$text": {"$search": query}}))
    return render_template("sites.html", sites=sites)
    

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
        return redirect(url_for('profile', username=session['user']))

    return render_template('register.html')


@app.route('/home', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure hashed password matches user input
            if check_password_hash(
                existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                return redirect(url_for(
                    "profile", username=session['user']))

            else:
                flash("Incorrect username and/or password")
                return redirect(url_for("login"))

        else:
            # username doesnt exist
            flash("Incorrect username and/or password")
            redirect(url_for("home"))
    return render_template("index.html")


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    username = mongo.db.users.find_one(
        {'username': session["user"]})['username']

    visits = mongo.db.planned_visits.find()

    if session['user']:
        return render_template(
            'profile.html', username=username, visits=visits)

    return redirect(url_for('home'))


@app.route('/logout')
def logout():
    flash('You have logged out')
    session.pop('user')
    return redirect(url_for('home'))


@app.route('/visit', methods=["GET", "POST"])
def visit():
    if request.method == "POST":
        visits = {
            "site_name": request.form.get("site_name"),
            "notes": request.form.get("notes"),
            "arrival": request.form.get("arrival"),
            "username": session['user']
        }
        mongo.db.planned_visits.insert_one(visits)
        flash("Visit has been added to your profile")
        return redirect(url_for('the_sites'))

    sites = mongo.db.sites.find().sort('site_name', 1)
    return render_template("visit.html", sites=sites)


@app.route("/edit_visit/<visit_id>", methods=["GET", "POST"])
def edit_visit(visit_id):
    if request.method == "POST":
        submit = {
            "site_name": request.form.get("site_name"),
            "notes": request.form.get("notes"),
            "arrival": request.form.get("arrival")

        }
        mongo.db.planned_visits.update({"_id": ObjectId(visit_id)}, submit)
        flash("Visit has been edited")

    visit = mongo.db.planned_visits.find_one({"_id": ObjectId(visit_id)})
    sites = mongo.db.sites.find().sort('site_name', 1)
    return render_template("edit_visit.html", visit=visit, sites=sites)


@app.route('/delete/<visit_id>')
def delete(visit_id):
    mongo.db.planned_visits.remove({"_id": ObjectId(visit_id)})
    flash("Visit removed")
    return redirect(url_for("the_sites"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
# from flask import Flask , jsonify , redirect, url_for,render_template, request
from flask import *

app = Flask(__name__)


@app.route("/")
def hello():                           
    return "<h1>Hello World!</h1>"

@app.route("/hello")
def hello_flask():
    return "<h1>Hello Flash!</h1>"

@app.route("/first")
def hello_first():
    return "<h3>Hello First</h3>"


@app.route('/json_test')
def hello_json():
    data = {'name' : 'Aaron', 'family' : 'Byun'}
    return jsonify(data)

@app.route('/server_info')
def server_json():
    data = { 'server_name' : '0.0.0.0', 'server_port' : '8080' }
    return jsonify(data)


@app.route('/new')
def new_student():
   return render_template('student.html')


@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name

@app.route('/login', methods = ['POST', 'GET'])
def login():
   if Flask.request.method == 'POST':
      user = Flask.request.form['myName']
      return redirect(url_for('success', name=user))
   else:
      user = request.args.get('myName')
      return redirect(url_for('success', name=user))


if __name__ == '__main__':
    app.debug = True
    host_addr ="localhost"
    port =8001
    app.run(host=host_addr, port=port)

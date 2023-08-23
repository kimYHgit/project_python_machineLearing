from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.debug = True
    host_addr ="localhost"
    port =8001
    app.run(host=host_addr, port=port)

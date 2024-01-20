from flask import Flask, request
from flask_cors import CORS, cross_origin
# Initializing flask app
app = Flask(__name__)
 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/register', methods=["POST"])
def app_register():
    data = request.json

    print(data)
    return 'OK', 200


@app.route('/login')
def app_login():
    data = request.json
    print(data)
    return 'OK', 200


@app.route('/get_courses')
def app_get_courses():
    data = request.json
    pass

@app.route('/set_courses')
def app_set_courses():
    data = request.json()
    return 'OK', 200



@app.route('/get_feed')
def app_get_feed():
    data = request.json()
    pass

@app.route('/post')
def app_post():
    data = request.json()
    pass

@app.route('/get_chat')
def app_get_chat():
    data = request.json()
    pass

@app.route('/send_chat')
def app_send_chat():
    data = request.json()
    pass




# Running app
if __name__ == '__main__':
    app.run(debug=True)
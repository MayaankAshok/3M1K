from flask import Flask, request

# Initializing flask app
app = Flask(__name__)
 
 
@app.route('/register')
def app_register():
    data = request.json()
    pass

@app.route('/login')
def app_login():
    data = request.json()
    pass

@app.route('/get_courses')
def app_get_courses():
    data = request.json()
    pass

@app.route('/set_courses')
def app_set_courses():
    data = request.json()
    pass


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
from flask import Flask, request
from flask_cors import CORS, cross_origin
from database import \
    insert_record,\
    record_from_rollnumber, \
    display_user_posts,\
    insert_into_user_courses, \
    insert_into_posts, \
        
    
# Initializing flask app
app = Flask(__name__)
 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/register', methods=["POST"])
def app_register():
    data = request.json
    insert_record(data['rollno'], data['username'], data['name'],  data['password'])
    print(data) 
    return 'OK', 200


@app.route('/login', methods=['POST'])
def app_login():
    data = request.json
    record = record_from_rollnumber(data['rollno'])
    print(data)
    print(record)
    if record[0][2] == data['password']:
        return 'OK', 200
    else :
        return "Failed", 401
         


@app.route('/get_courses')
def app_get_courses():
    data = request.json
    pass

@app.route('/set_courses')
def app_set_courses():
    data = request.json()
    insert_into_user_courses(data['username'], data['course_id'])
    return 'OK', 200



@app.route('/get_feed')
def app_get_feed():
    data = request.json()
    feed = display_user_posts(data['username'])
    return feed

@app.route('/post')
def app_post():
    data = request.json()
    insert_into_posts(data['username'], data['course_id'], data['content'])
    return 'OK', 200

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
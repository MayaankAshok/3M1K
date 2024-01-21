from flask import Flask, request
import json
from flask_cors import CORS, cross_origin
from database import \
    insert_user,\
    record_from_username, \
    display_user_posts,\
    insert_into_user_courses, \
    insert_into_posts,\
    db_exit_func,\
    get_courses,\
    return_messages,\
    get_users_rn
import atexit
atexit.register(db_exit_func)
    
# Initializing flask app
app = Flask(__name__)
 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/register', methods=["POST"])
def app_register():
    data = request.json
    insert_user(data['rollno'], data['username'], data['name'],  data['password'])
    print(data) 
    return 'OK', 200


@app.route('/login', methods=['POST'])
def app_login():
    data = request.json
    record = record_from_username(data['username'])
    print(data)
    print(record)
    print("+++++++++++++++++++++++")
    if record[0][3] == data['password']:
        return 'OK', 200
    else :
        return "Failed", 401
         


@app.route('/get_courses', methods=["GET"])
def app_get_courses():
    # data = request.json
    data = get_courses()
    return [{'id':d[0], 'name':d[1]} for d in data]
    # pass

@app.route('/set_courses')
def app_set_courses():
    data = request.json
    insert_into_user_courses(data['username'], data['course_id'])
    return 'OK', 200



@app.route('/get_feed', methods=['GET'])
def app_get_feed():
    print("GET_FEED")
    print(request.args)

    data = request.args
    feed = display_user_posts(data['username'])
    print(feed)
    courses = get_courses()
    print(courses)
    courses_ids = [a[0] for a in courses]
    final_feed = [{'courseID': courses[courses_ids.index(f[2])][1], "assignmentID": f[0], "description" : f[4], "timestamp": f[5]} for f in feed]
    print(final_feed)
    return final_feed 
    return [{"courseID": "Hi", "assignmentID": "Hello", "description": "whatsup", "timestamp": "1234"},{"courseID": "Hi", "assignmentID": "Hello", "description": "whatsup", "timestamp": "1234"}]

@app.route('/post')
def app_post():
    data = request.json
    insert_into_posts(data['username'], data['course_id'], data['content'])
    return 'OK', 200

@app.route('/get_chat', methods = ['GET'])
def app_get_chat():
    data = request.args
    print(data['username'])
    feed = return_messages(data['username'])
    users = get_users_rn()
    print(feed, users)
    users_d = {b:a for a,b in users}
    if feed == () : return {'contacts':[], 'messages':[]}
    print([[users_d[f[1]], users_d[f[2]] ]for f in feed])
    flat_contacts = [a  for b in[[users_d[f[1]], users_d[f[2]] ]for f in feed]for a in b ]
    # print(sum([[users_d[f[1]], users_d[f[2]] ]for f in feed]))
    contacts = list(set(flat_contacts))
    contacts.remove(data['username'])

    messages = []
    for contact in contacts:
        messages.append({contact:[]})
    
    for f in feed:
        a=  [users_d[f[1]], users_d[f[2]]]
        a.remove(data['username'])
        c_idx = contacts.index(a[0])
        messages[c_idx][contacts[c_idx]].append({"sender": users_d[f[1]] == data['username'], "content" : f[3], "timestamp": f[4]})
    for i in range(len(contacts)):
        messages[i][contacts[i]].sort(key = lambda a : a['timestamp'])
    print(contacts, messages)
    return {'contacts':contacts, 'messages':messages}
    return []
@app.route('/send_chat')
def app_send_chat():
    pass




# Running app
if __name__ == '__main__':
    app.run(debug=True)
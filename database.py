import pymysql
from datetime import datetime

# Replace these variables with your actual MySQL database credentials
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'mayaank2004',
    'database': '3M1K',
    # "cursorclass":pymysql.cursors.DictCursor
}

# Connect to the database
connection = pymysql.connect(**db_config)
# cursor = connection.cursor(buffered=True)
cursor = connection.cursor()

def insert_user(roll_number,username,name,password):


    insert_query = "INSERT INTO `User` (`Roll_number`,`Username`, `Name`, `password`) VALUES (%s, %s, %s, %s)"
    insert_values = (roll_number,username, name, password)
    
    cursor.execute(insert_query,insert_values)
    connection.commit()

def record_from_username(username):

    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = '{username}'"
    # select_values= (username,)
    print(roll_query)
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0][0]

    select_query = "SELECT * FROM `User` WHERE `Roll_number` = %s"
    select_values = (roll_number,)


    cursor.execute(select_query,select_values)

    records = cursor.fetchall()
    return records




def display_user_posts(username):
    print(username)
    roll_query = "SELECT `Roll_number` FROM `User` WHERE `Username` = %s;"
    # print(roll_query)
    cursor.execute(roll_query, (username,))
    roll_numbers = cursor.fetchall()
    if not len(roll_numbers): return []
    roll_number = roll_numbers[0][0]
    print(roll_number)
    course_query = f"SELECT Course_id FROM `USER_COURSES` WHERE `Roll_number` = '{roll_number}'"
    cursor.execute(course_query)
    courses = cursor.fetchall()

    rets = []

    # Display posts for each course
    for course in courses:
        course_id = course[0]
        post_query = f"SELECT * FROM `POST` WHERE `Course_id` = {course_id}"
        cursor.execute(post_query)
        posts = cursor.fetchall()

        print(f"Posts for Course {course_id}:")
        for post in posts: 
            rets += [post]

    return rets

def get_courses():
    cursor.execute("Select * from courses")
    return cursor.fetchall()

def insert_into_user_courses(username,course_id):
    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = '{username}'"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']
    insert_query = "INSERT INTO `USER_COURSES` (`Roll_number`, `Course_id`) VALUES (%s, %s)"
    insert_values = (roll_number, course_id)

    cursor.execute(insert_query,insert_values)
    connection.commit()

def insert_into_posts(username,course_id,content):

    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = '{username}'"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']

    insert_query = "INSERT INTO `POST` (`User_rn`, `Course_id`,`Status` ,`Content`) VALUES (%s, %s,%s,%s)"
    insert_values = (roll_number, course_id,'AVAILABLE',content)

    cursor.execute(insert_query,insert_values)
    connection.commit()


def new_message(username1,username2,content):
    roll_query_1 = f"SELECT `Roll_number` FROM `User` WHERE `Username` = '{username1}'"
    cursor.execute(roll_query_1)
    roll_numbers = cursor.fetchall()
    roll_number1 = roll_numbers[0]['Roll_number']

    roll_query_2 = f"SELECT `Roll_number` FROM `User` WHERE `Username` = '{username2}'"
    cursor.execute(roll_query_2)
    roll_numbers = cursor.fetchall()
    roll_number2 = roll_numbers[0]['Roll_number']


    insert_query = "INSERT INTO `Messages` (`User1_rn`, `User2_rn`,`Content`) VALUES (%s, %s,%s)"
    insert_values = (roll_number1,roll_number2,content)
    cursor.execute(insert_query,insert_values)
    connection.commit()

def return_messages(username):
    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = '{username}'"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    print(username, roll_numbers)
    roll_number = roll_numbers[0][0]

    messages_query = f"SELECT * FROM `Messages` WHERE `User1_rn` = {roll_number} OR `User2_rn` = {roll_number}"

    cursor.execute(messages_query)
    messages = cursor.fetchall()
    return messages

def get_users_rn():
    cursor.execute("Select Username, Roll_number from User;")
    return cursor.fetchall()

    


    








    



if __name__ == "__main__":
    insert_user(2022101074,'kavishthug','kavish','qwerty')
    insert_user(2022101076,'alephnot','mayaank','qwertyuu')
    record_from_username(2022101076)




def db_exit_func():
    cursor.close()
    connection.close()








# Commit the changes and close the connection
# cursor.close()
# connection.close()



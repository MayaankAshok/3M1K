import mysql.connector
from datetime import datetime

# Replace these variables with your actual MySQL database credentials
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'Ghazal@03',
    'database': '3M1K'
}

# Connect to the database
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

def insert_user(roll_number,username,name,password):


    insert_query = "INSERT INTO `User` (`Roll_number`,`Username`, `Name`, `password`) VALUES (%s, %s, %s, %s)"
    insert_values = (roll_number,username, name, password)
    
    cursor.execute(insert_query,insert_values)
    connection.commit()

def record_from_rollnumber(username):

    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username}"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']

    select_query = "SELECT * FROM `User` WHERE `Roll_number` = %s"
    select_values = (roll_number,)


    cursor.execute(select_query,select_values)

    records = cursor.fetchall()
    return records




def display_user_posts(username):

    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username}"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']
    
    course_query = f"SELECT Course_id FROM `USER_COURSES` WHERE `Roll_number` = {roll_number})"
    cursor.execute(course_query)
    courses = cursor.fetchall()

    rets = []

    # Display posts for each course
    for course in courses:
        course_id = course['Course_id']
        post_query = f"SELECT * FROM `POST` WHERE `Course_id` = {course_id}"
        cursor.execute(post_query)
        posts = cursor.fetchall()

        print(f"Posts for Course {course_id}:")
        for post in posts: 
            rets += post
    return rets

def insert_into_user_courses(username,course_id):
    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username}"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']
    insert_query = "INSERT INTO `USER_COURSES` (`Roll_number`, `Course_id`) VALUES (%s, %s)"
    insert_values = (roll_number, course_id)

    cursor.execute(insert_query,insert_values)
    connection.commit()

def insert_into_posts(username,course_id,content):

    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username}"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']

    insert_query = "INSERT INTO `POST` (`User_rn`, `Course_id`,`Status` ,`Content`) VALUES (%s, %s,%s,%s)"
    insert_values = (roll_number, course_id,'AVAILABLE',content)

    cursor.execute(insert_query,insert_values)
    connection.commit()


def new_message(username1,username2,content):
    roll_query_1 = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username1}"
    cursor.execute(roll_query_1)
    roll_numbers = cursor.fetchall()
    roll_number1 = roll_numbers[0]['Roll_number']

    roll_query_2 = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username2}"
    cursor.execute(roll_query_2)
    roll_numbers = cursor.fetchall()
    roll_number2 = roll_numbers[0]['Roll_number']


    insert_query = "INSERT INTO `Messages` (`User1_rn`, `User2_rn`,`Content`) VALUES (%s, %s,%s)"
    insert_values = (roll_number1,roll_number2,content)
    cursor.execute(insert_query,insert_values)
    connection.commit()

def return_messages(username):
    roll_query = f"SELECT `Roll_number` FROM `User` WHERE `Username` = {username}"
    cursor.execute(roll_query)
    roll_numbers = cursor.fetchall()
    roll_number = roll_numbers[0]['Roll_number']

    messages_query = f"SELECT * FROM `Messages` WHERE `User1_rn` = {roll_number} OR `User2_rn = {roll_number}"

    cursor.execute(messages_query)
    messages = cursor.fetchall()
    return messages


    


    








    



if __name__ == "__main__":
    insert_user(2022101074,'kavishthug','kavish','qwerty')
    insert_user(2022101076,'alephnot','mayaank','qwertyuu')
    record_from_rollnumber(2022101076)













# Commit the changes and close the connection
# cursor.close()
# connection.close()



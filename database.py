import mysql.connector

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

def insert_record(roll_number,name,password):


    insert_query = "INSERT INTO `User` (`Roll_number`, `Name`, `password`) VALUES (%s, %s, %s)"
    insert_values = (roll_number, name, password)
    
    cursor.execute(insert_query,insert_values)
    connection.commit()

def record_from_rollnumber(roll_number):
    select_query = "SELECT * FROM `User` WHERE `Roll_number` = %s"
    select_values = (roll_number,)


    cursor.execute(select_query,select_values)

    records = cursor.fetchall()

    if records:
        for record in records:
            print(record)
    else:
        print("No records found for the given name.")


def display_user_posts(roll_number):
    
    # Connect to the database


    # Fetch all courses for the given roll_number
    course_query = f"SELECT Course_id FROM `USER_COURSES` WHERE `Roll_number` = {roll_number})"
    cursor.execute(course_query)
    courses = cursor.fetchall()

    # Display posts for each course
    for course in courses:
        course_id = course['Course_id']
        post_query = f"SELECT * FROM `POST` WHERE `Course_id` = {course_id}"
        cursor.execute(post_query)
        posts = cursor.fetchall()

        print(f"Posts for Course {course_id}:")
        for post in posts: 
            print(f"Post ID: {post['Post_id']}, Status: {post['Status']}, Content: {post['Content']}")

def insert_into_user_courses(roll_number,course_id):
    insert_query = "INSERT INTO `USER_COURSES` (`Roll_number`, `Course_id`) VALUES (%s, %s)"
    insert_values = (roll_number, course_id)

    cursor.execute(insert_query,insert_values)
    connection.commit()

def insert_into_posts(roll_number,course_id,content):
    insert_query = "INSERT INTO `POST` (`User_rn`, `Course_id`,`Status` ,`Content`) VALUES (%s, %s,%s,%s)"
    insert_values = (roll_number, course_id,'AVAILABLE',content)

    cursor.execute(insert_query,insert_values)
    connection.commit()







# insert_record(2022101074,'kavish','qwerty')
# insert_record(2022101076,'mayaank','qwertyuu')
record_from_rollnumber(2022101076)

insert_into_user_courses(2022101074,1)
insert_into_user_courses(2022101074,2)









# Commit the changes and close the connection
cursor.close()
connection.close()



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

def record_from_username(name):
    select_query = "SELECT * FROM `User` WHERE `Name` = %s"
    select_values = (name,)


    cursor.execute(select_query,select_values)

    records = cursor.fetchall()

    if records:
        for record in records:
            print(record)
    else:
        print("No records found for the given name.")


insert_record(2022101074,'kavish','qwerty')
insert_record(2022101076,'mayaank','qwertyuu')
record_from_username('kavish')


# Commit the changes and close the connection
cursor.close()
connection.close()



# Title: Python Assignment 7.3
# Author: Professor Krasso
# Date: 25 Sept 2022
# Description: Python operations
# https: // www.w3schools.com/python/python_for_loops.asp
# https://www.programiz.com/python-programming/if-elif-else
# https:www.w3schools.com/python/python_datetime.asp


# import date module
import datetime
from pymongo import MongoClient
client = MongoClient(
    "mongodb+srv://web335_user:s3cret@web335db.ljzn1ss.mongodb.net/?retryWrites=true&w=majority")
print(client)

db = client["web335DB"]
collection = db["users"]

# # newUserDoc Created
newUserDoc = {
    'firstName': "Brick",
    'lastName': "Brick",
    'employeeId': "1022",
    'email': "brick@me.com",
    'dateCreated': datetime.datetime.now(),
}

# # inserts a new doc
db.users.insert_one(newUserDoc)

# print new document created
print(db.users.find_one({'firstName': 'Brick'}))

# # update email
db.users.update_one({'firstName': 'Brick'}, {
                    '$set': {'email': 'barnetBrick@gmail.com'}})
# # print updated email
print(db.users.find_one({'firstName': 'Brick'}))

# delete the document
db.users.delete_one({'firstName': 'Brick'})

# doc was deleted
print(db.users.find_one({'firstName': 'Brick'}))

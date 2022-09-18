# Title: Python Assignment 6.3
# Author: Professor Krasso
# Date: 18 Sept 2022
# Description: Python operations
# https: // www.w3schools.com/python/python_for_loops.asp
# https://www.programiz.com/python-programming/if-elif-else

from pymongo import MongoClient
client = MongoClient(
    "mongodb+srv://web335_user:s3cret@web335db.ljzn1ss.mongodb.net/?retryWrites=true&w=majority")
print(client)
# Python code to display all users in a collection


db = client["web335DB"]
collection = db["users"]

for user in db.users.find({}):
    print(user)

# empployeId 1011
print(db.users.find_one({'employeeId': '1011'}))

# mozart document
print(db.users.find_one({'lastName': 'Mozart'}))

# Title: detres-projections.js
# Author: Professor Krasso
# Date: 11 Sept 2022
# Description: Python operations
# https: // www.w3schools.com/python/python_for_loops.asp
# https://www.programiz.com/python-programming/if-elif-else

# list of hobbies to loop through an array of hobbies

hobbies = ["poker", "cooking", "painting", "coding", "crypto"]
for each in hobbies:
    print(each)

# loops through days with if/else statement for Sat and Sunday

space = " "
days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wed", "Thurs", "Friday"]
for day in days:
    if day == "Monday" or day == "Tuesday" or day == "Wed" or day == "Thurs" or day == "Friday":
        print("It's"+space + day + space + "It's a work day")
    elif day == "Saturday" or day == "Sunday":
        print(day + space + "Enjoy your day off!")

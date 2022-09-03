// # Title: Assignment 4.2 Mongo DE Shell queries
// # Author: Professor Krasso
// # Date: 3 Sep 2022
// # Description: queries with MondoDb Shell
//Instructions provided by course instructions

//locates all documents in the user's collection
db.users.find();

//locates email address of jBach

db.users.find({ email: "jbach@me.com" });

//locates last name of Mozart

db.users.find({ lastName: "Mozart" });

//locates first name of Richard

db.users.find({ firstName: "Richard" });

//locates employeeId of 1010

db.users.find({ employeeId: "1010" });

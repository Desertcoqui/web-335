/**
	Title: detres-projections.js
    Author: Professor Krasso
    Date: 11 Sept 2022
    Description: MongoDB Shell Scripts for the users collection.
 */

// Use bottom string in CLI to connect to mongosh

// mongosh "mongodb+srv://web335db.ljzn1ss.mongodb.net/web335DB" --apiVersion 1 --username web335_user

//insert one User

zach = {
  firstName: "Zach",
  lastName: "Morris",
  employeeId: "10012",
  email: "zach@me.com",
  dateCreated: new Date(),
};

db.users.insertOne(zach);

//update mozarts email.

db.users.updateOne(
  { email: "wmozart@me.com" },
  {
    $set: {
      email: "mozart@me.com",
    },
  }
);

//verify mozarts email was updated
db.users.find({ lastName: "Mozart" });

//Projection to only display certain field

db.users.aggregate([{ $project: { employeeId: 0, dateCreated: 0 } }]);

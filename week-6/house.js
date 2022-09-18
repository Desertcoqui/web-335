/**
	Title: houses.js
    Author: Professor Krasso
    Date: 11 August 2022
    Description: MongoDB Shell Scripts for the houses and students collections.
 */

// Use bottom string in CLI to connect to mongosh

// mongosh "mongodb+srv://web335db.ljzn1ss.mongodb.net/web335DB" --apiVersion 1 --username web335_user

// Delete the houses and students collections.
db.houses.drop();
db.students.drop();

// Create the houses and students collections using Document Validation.
db.createCollection("houses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        mascot: {
          bsonType: "string",
        },
        founder: {
          bsonType: "string",
        },
        houseId: {
          bsonType: "string",
        },
      },
    },
  },
});

db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        studentId: {
          bsonType: "string",
        },
        houseId: {
          bsonType: "string",
        },
      },
    },
  },
});

// Houses.
gryffindor = {
  mascot: "Lion",
  founder: "Godric Gryffindor",
  houseId: "h1007",
};

hufflepuff = {
  mascot: "Badger",
  founder: "Helga Hufflepuff",
  houseId: "h1008",
};

ravenclaw = {
  mascot: "Eagle",
  founder: "Rowena Ravenclaw",
  houseId: "h1009",
};

slytherin = {
  mascot: "Snake",
  founder: "Salazar Slytherin",
  houseId: "h1010",
};

// Insert the documents.
db.houses.insertOne(gryffindor);
db.houses.insertOne(hufflepuff);
db.houses.insertOne(ravenclaw);
db.houses.insertOne(slytherin);

// Gryffindor students.
dumbledore = {
  firstName: "Albus",
  lastName: "Dumbledore",
  studentId: "s1007",
  houseId: "h1007",
};

minerva = {
  firstName: "Minerva",
  lastName: "McGonagall",
  studentId: "s1008",
  houseId: "h1007",
};

hagrid = {
  firstName: "Hagrid",
  lastName: "Rubeus",
  studentId: "s1009",
  houseId: "h1007",
};

// Insert the documents.
db.students.insertOne(dumbledore);
db.students.insertOne(minerva);
db.students.insertOne(hagrid);

// Hufflepuff students.
wenlock = {
  firstName: "Bridget",
  lastName: "Wenlock",
  studentId: "s1010",
  houseId: "h1008",
};

diggory = {
  firstName: "Cedric",
  lastName: "Diggory",
  studentId: "s1011",
  houseId: "h1008",
};

abbot = {
  firstName: "Hannah",
  lastName: "Abbott",
  studentId: "s1012",
  houseId: "h1008",
};

// Insert the documents.
db.students.insertOne(wenlock);
db.students.insertOne(diggory);
db.students.insertOne(abbot);

// Ravenclaw students.
lovegood = {
  firstName: "Luna",
  lastName: "Lovegood",
  studentId: "s1013",
  houseId: "h1009",
};

trelawney = {
  firstName: "Sybill",
  lastName: "Trelawney",
  studentId: "s1014",
  houseId: "h1009",
};

chang = {
  firstName: "Cho",
  lastName: "Chang",
  studentId: "s1015",
  houseId: "h1009",
};

// Insert the documents.
db.students.insertOne(lovegood);
db.students.insertOne(trelawney);
db.students.insertOne(chang);

// Slytherin students.
malfoy = {
  firstName: "Lucius",
  lastName: "Malfoy",
  studentId: "s1016",
  houseId: "h1010",
};

potter = {
  firstName: "Albus",
  lastName: "Potter",
  studentId: "s1017",
  houseId: "h1010",
};

lestrange = {
  firstName: "Bellatrix",
  lastName: "Lestrange",
  studentId: "s1018",
  houseId: "h1010",
};

// Insert the documents.
db.students.insertOne(malfoy);
db.students.insertOne(potter);
db.students.insertOne(lestrange);

//Query to find documents in house  collection
db.houses.find();

//Query to find documents in students collection
db.students.find();

//Query to add a document to the students collection and another one to find it.

detres = {
  firstName: "Ferdinand",
  lastName: "Detres",
  studentId: "s1019",
  houseId: "h1010",
};
db.students.insertOne(detres);

db.students.find(detres);

//Query to drop student above

db.students.drop(detres);

//Query to prove it was dropped
db.students.find(detres);

//Query to show students by house

db.houses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "student",
    },
  },
]);

//Query to find all students in Griffindor
db.students.aggregate([{ $match: { houseId: "h1007" } }]);

//Query to find all students in Eagle mascot

db.houses.aggregate([
  { $match: { houseId: "h1009" } },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "Ravenclaw",
    },
  },
]);

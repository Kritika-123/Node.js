// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/Univ";
// MongoClient.connect(url, { useUnifiedTopology: false }, function(err, db) {
// if (err) throw err;
// console.log("Database created!");
// db.close();
// });

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'ydatabase';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    app.get('/', (req, res) => {
      db.collection('mycollection').find().toArray((err, items) => {
        if (err) {
          console.log(err);
        } else {
          res.send(items);
        }
      });
    });

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }
});
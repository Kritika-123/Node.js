require('dotenv').config();

const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const app = express();
const PORT = process.env.PORT || 3000;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Database!, connected to the db");

        const db = client.db('Practice1');

        db.collection('test').insertOne({ name: 'test' }, (err, result) => {
            if (err) {
                console.error('Failed to insert doc', err);
                return;
            }

            console.log("Doc inserted");

            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            })
        })

        // db.close();
    })
    .catch(err => {
        throw err;
    });



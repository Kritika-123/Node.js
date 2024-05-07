// const express=require("express");
// const mongoose=require("mongoose");
// const app=express();
// mongoose.connect("mongodb://localhost:27017/Univ")
// .then(()=>{
//     console.log("database connected");
// })
// .catch(()=>{
//     console.log("not connected");
// })
// app.listen(3000,()=>{
//     console.log("listing to port 3000");
// })
const express=require('express');
const MongoClient = require('mongodb').MongoClient;
const app=express;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

MongoClient.connect(url, (err, client) => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // Perform operations here

    // Insert a document into a collection
    db.collection('users').insertOne({ name: 'John', age: 30 }, (err, result) => {
        if (err) {
            console.error('Failed to insert document:', err);
            return;
        }
        console.log("Document inserted successfully:", result.insertedId);

        // Retrieve documents from a collection
        db.collection('users').find({}).toArray((err, documents) => {
            if (err) {
                console.error('Failed to retrieve documents:', err);
                return;
            }
            console.log("Retrieved documents:", documents);

            // Update a document in a collection
            db.collection('users').updateOne({ name: 'John' }, { $set: { age: 31 } }, (err, result) => {
                if (err) {
                    console.error('Failed to update document:', err);
                    return;
                }
                console.log("Document updated successfully");

                // Delete a document from a collection
                db.collection('users').deleteOne({ name: 'John' }, (err, result) => {
                    if (err) {
                        console.error('Failed to delete document:', err);
                        return;
                    }
                    console.log("Document deleted successfully");

                    // Close the MongoDB connection
                    client.close();
                    console.log("Connection closed");
                });
            });
        });
    });
});


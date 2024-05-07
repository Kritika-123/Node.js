// var express=require('express');
// var app=express();
// app.get('/get',(req,res)=>
// {
//    console.log( req.body)
// //    res.status(200)
//      res.sendFile(__dirname+"/"+"a.html")
//     // res.send('hey')
// })
// app.listen(2000);

// const express = require('express');
// const app = express();

// app.get('/api/users', (req, res) => {
//   const { name, age } = req.query;
//   res.send(`Name: ${name}, Age: ${age}`);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



// const express = require('express');
// const app = express();

// // Example of a logging middleware
// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request to ${req.url}`);
//  next();
// });

// // Example of a route handler
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Example of error-handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

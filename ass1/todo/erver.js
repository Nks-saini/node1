// const mongoose = require('mongoose')
// const express = require('express')

// const app = express()

//middleware

// app.use(express.json())



// const db = 'mongodb://localhost:27017/todo';

// mongoose
// .connect(db,{
//     useCreateIndex :true,
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// })
// .then(() => console.log("conected to mongoose db...."))
// .catch(err => console.log('datbase connection error :'+ err))


var MongoClient = require('mongodb').MongoClient;
var dburl       =   "mongodb://localhost:27017/todo";
MongoClient.connect(dburl, function(err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
})

//listen to port

const port =5000

app.listen(port, () =>{
    console.log('server is started is port :' +port);
})


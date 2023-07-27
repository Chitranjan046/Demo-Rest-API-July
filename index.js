// require the express
const express = require('express');

// port
const port = 5000;

// require the mongoose 
const mongoose = require('mongoose');
// create the app

const app = express();

// connect my app to mongoDB database

mongoose.connect("mongodb://127.0.0.1:27017/DemoRestAPI", {useNewUrlParser : true, useUnifiedTopology : true})
  .then(function() {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });



// listen to app

app.listen(port, (err)=>{
    if(err) {
        console.log(`Problem in running the server`)
    }
    console.log(`Server is running on port $(Port)`)
})
const mongoose = require('mongoose');


// Create a new Schema for developer


const developerSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
       type : String,
       unique : true,
       require : true
    },
    password : {
        type : String,
        require : true 
    },
    technology : {
        type : String,
        require : true 
    },
    employed : {
        type : String,
        require : true 
    },

}, {timestamps : true})


module.exports = mongoose.model("Developer", developerSchema);
// const express = require ('express');
// const router = express.Router();

const router = require('express').Router();
const mongoose = require('mongoose');
const Developer = require("../models/developer");
// create a developer
router.post("/create", async(req,res)=>{
    try{
    const newDeveloper = await Developer.create(req.body);
    res.status(201).json({message : "success"})
    }
    catch(err){
      res.status(400).json({message : "Error"})
    }
})



module.exports = router;












// get all the developer




// post/create a developer





// put/patch update a developer 





// delete one developer





// get only one developer 




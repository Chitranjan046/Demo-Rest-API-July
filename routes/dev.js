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

// get all the developer
router.get("/all", async(req, res)=>{
  try{
    const allDevelopers = await developer.find();
    res.status(200).json(allDevelopers);
  }
  catch(err){
    res.status(400).json({message : "Error"})
  }
})

// get only one developer
router.get("/:id", async(req, res)=> {
    try {
      const developer = await Developer.findById(req.param.id);
      res.status(200).json(developer);
    }
    catch(err) {
      res.status(400).json("Error")
    }
})

// post/create a developer





// put/patch update a developer 





// delete one developer





// get only one developer 






module.exports = router;
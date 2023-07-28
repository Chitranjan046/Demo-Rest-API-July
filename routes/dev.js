// // const express = require ('express');
// // const router = express.Router();

// const router = require('express').Router();
// const mongoose = require('mongoose');
// const Developer = require("../models/developer");
// // create a developer
// router.post("/create", async(req,res)=>{
//     try{
//     const newDeveloper = await Developer.create(req.body);
//     res.status(201).json({message : "success"})
//     }
//     catch(err){
//       res.status(400).json({message : "Error"})
//     }
// })

// // get all the developer
// router.get("/all", async(req, res)=>{
//   try{
//     const allDevelopers = await developer.find();
//     res.status(200).json(allDevelopers);
//   }
//   catch(err){
//     res.status(400).json({message : "Error"})
//   }
// })

// // get only one developer
// router.get("/:id", async(req, res)=> {
//     try {
//       const developer = await Developer.findById(req.param.id);
//       res.status(200).json(developer);
//     }
//     catch(err) {
//       res.status(400).json("Error")
//     }
// })


// // update a developer

// router.patch("/update:id", async(req, res)=> {
//   try {
//     const{id : _id} = await req.params;
//     const changes = await req.body;

//     const upatedDeveloper = await Developer.findByIdAndUpdate(_id, {...changes, _id})
//     res.status(200).json({message : "Success"})
//   }
//   catch(err) {
//     res.status(400).json("Error")
//   }
// })



// // post/create a developer





// // put/patch update a developer 





// // delete one developer





// // get only one developer 






// module.exports = router;


const router = require('express').Router();
const mongoose = require('mongoose');
const Developer = require("../models/developer");

// create a developer
router.post("/create", async (req, res) => {
  try {
    const newDeveloper = await Developer.create(req.body);
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
});

// get all the developers
router.get("/all", async (req, res) => {
  try {
    const allDevelopers = await Developer.find();
    res.status(200).json(allDevelopers);
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
});

// get a specific developer by ID
router.get("/:id", async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    res.status(200).json(developer);
  } catch (err) {
    res.status(400).json("Error");
  }
});

// update a developer
router.patch("/update/:id", async (req, res) => {
  try {
    const { id: _id } = req.params;
    const changes = req.body;

    const updatedDeveloper = await Developer.findByIdAndUpdate(_id, { ...changes, _id });
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(400).json("Error");
  }
});

// delete a developer by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Developer.findByIdAndRemove(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json("Error");
  }
});

module.exports = router;

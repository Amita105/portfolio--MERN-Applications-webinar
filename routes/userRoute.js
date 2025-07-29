
const express = require("express");
const mongoose = require("mongoose");
const user =  require("../models/userModel");


const router = express.Router();

//create 
router.post("/", async(req,res)=>{
//simple way of accessing request body
const {name,email,age} = req.body
try {
const userAdded = await  user.create({
//stored in database form front end
name:name,
email:email,
age:age
})
res.status(200).json(userAdded)
} catch (error) {
res.status(400).json({error :error.message})
}

})

//read
router.get("/",async (req,res)=>{
try {
const allUsers = await  user.find()
res.status(200).json(allUsers)
} catch (error) { 
res.status(400).json({error :error.message})
}
})

//single user
router.get("/:id",async (req,res)=>{
    const {id} = req.params
try {
const singleUser = await  user.findById({_id:id})
res.status(200).json(singleUser)
} catch (error) { 
res.status(400).json({error :error.message})
}
})

//delete user
router.delete("/:id",async (req,res)=>{
    const {id} = req.params
try {
const deleteUser = await  user.findByIdAndDelete({_id:id})
res.status(200).json(deleteUser)
} catch (error) { 
res.status(400).json({error :error.message})
}
})

//update user
router.patch("/:id",async (req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body

try {
const updatedUser = await  user.findByIdAndUpdate(id,req.body,{new:true});
res.status(200).json(updatedUser)
} catch (error) { 
res.status(400).json({error :error.message})
}
})



module.exports = router

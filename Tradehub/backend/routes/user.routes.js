const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config()
const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const {firstName, lastName, email, password} = req.body;
    try{
        let userExist = await UserModel.findOne({email})
        bcrypt.hash(password, 5, async(err, hash) => {
            if(err){
                res.status(400).json({error:err.message})
            }else if(! /^[a-zA-Z ]*$/.test(firstName)){
                res.json({msg:"Invalid First Name!"})
            }else if(! /^[a-zA-Z ]*$/.test(lastName)){
                res.json({msg:"Invalid Last Name!"})
            }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
                res.json({msg:"Invalid emailId!"})
            }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)){
                res.json({msg:"Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character and minimum legth should be 8!"})
            }else if(userExist){
                    res.json({msg:"Email already exist, please login or signup with another email"})
                }else{
                const user = new UserModel({firstName, lastName, email, password:hash})
                await user.save()
                res.json({msg:"New user registered"})
            }
        })
    }catch(err){
        res.json({error:err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password,(err,result)=>{
                if(result){
                    let token = jwt.sign({userID:user._id,user:user.firstName}, process.env.secret)
                    res.json({msg:"Logged In!", token})
                }else{
                    res.json({msg:"Wrong Credentials"})
                }
            })
        }else{
            res.json({msg:"User does  not exist"})
        }
    }catch(err){
        res.json({error:err.message})
    }
})



module.exports={
    userRouter
} 
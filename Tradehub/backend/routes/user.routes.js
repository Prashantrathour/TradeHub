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
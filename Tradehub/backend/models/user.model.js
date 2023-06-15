const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    email:{
        type:String,
        required: true,
        unique: true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         // throw new Error("Email is invalid!")
        //         res.status(400).json({error:"Email is invalid!"})
        //     }
        // }    
    },
    password:String
})

const UserModel = mongoose.model("user",userSchema)

module.exports={
    UserModel
}
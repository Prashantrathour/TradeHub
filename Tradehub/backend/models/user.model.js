const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid!")
            }
        }    
    },
    password:String
})

const UserModel = mongoose.model("user",userSchema)

module.exports={
    UserModel
}
const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes")
const cors = require("cors");
const { stockrouter } = require("./routes/stock.routes");
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/stocks", stockrouter)
app.use("/users", userRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`Running port ${process.env.port}`)
        console.log("connected to DB")
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }
})
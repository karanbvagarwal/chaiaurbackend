import DbConnect from "./db/index.js"
import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()

app.listen(process.env.PORT,  ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})



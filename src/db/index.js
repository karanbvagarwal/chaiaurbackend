import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import express from "express"
const app = express()
const DbConnect =  async ()=> {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected!! ${connectionInstance.connection.host}`)

    }catch(error){
        console.error("Something went wrong", error)
        throw error
    }
}

export default DbConnect
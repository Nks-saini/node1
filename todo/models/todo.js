const mongoose = require("mongoose")

//create schema
const todoSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    add_dat:{
        type:String,
        default:Date.now
    },

})

mongoose.model("todo",todoSchema)



// const schema = mongoose.Schema

const mongoose = require('mongoose')
const {objectID} = mongoose.Schema.Types

const postSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    postedBy:{
        type:{objectID},
        ref:"user"
    }
})

mongoose.model("Post",postSchema)

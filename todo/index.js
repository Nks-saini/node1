const mongoose = require("mongoose")
const express = require("express")
const app = express()
const Port = 3000
const {MONGOURI} = require('./keys')

//middleware
app.use(express.json())

app.use('/', require('./routes/todo'))

mongoose.connect(MONGOURI, {
    useNewUrlParser: true ,
    useUnifiedTopology:true,
})
mongoose.connection.on('connected', () =>{
    console.log("connected to the mongo yeah.....")
})
mongoose.connection.on('error', (err) =>{
    console.log("error connecting ",err);
})



app.listen(Port,()=> {console.log("Port is Running :  "+Port)})
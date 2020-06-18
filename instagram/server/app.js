const express = require("express")
const app = express()
const PORT = 5000
const mongoose = require("mongoose")
const {MONGOURI} = require('./keys')


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


//model from mongodb
require('./models/user')
require('./models/post')

app.use(express.json())
//routes
app.use(require('./routes/auth'))
app.use(require('./routes/post'))





app.listen(PORT,() => {console.log("Port is running : ",PORT)})









// const customMiddleware = (req,res,next) =>{
//     console.log("custom middleware")
//     next()
// }

// app.use(customMiddleware) //use all

// app.get('/', (req,res)=>{
//     res.send("Hello")
// })

// app.get('/about',customMiddleware, (req,res)=>{
//     console.log("hello about")
//     res.send("about page")
// })

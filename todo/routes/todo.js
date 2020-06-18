const express = require("express")
const router = express()


//import model
const Todo = require('../models/todo')

router.get('/',(req,res) =>{
    Todo.find()
        .sort({date: -1})
        .then((todos) => res.json(todos))
})

module.exports = router;
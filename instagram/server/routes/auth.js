const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
// const requireLogin = require('../middleware/requireLogin')

// router.get('/protected',requireLogin,(req,res) =>{
//     console.log("hello user")
//     res.send('hello user')
// })



router.post('/signup',(req,res)=>{
    console.log(req.body);
    const {name,email,password} = req.body;
    if(!email || !password || !name){
        return res.status(422).json({error:"Please add  all te fields"})
    }
    User.findOne({email:email})
    .then((savedUser) =>{
        if(savedUser){
        return res.status(422).json({error:"User already exist with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then((user)=>{
                res.json({message:"Saved successfully"})
            })
            .catch(err => {
                console.log(err);
            })
        })
      
    })
    .catch(err=>{
        console.log(err)
    })

})


//signin
router.post('/signin',(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"please add email and password"})//empty
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            res.status.json({error:"Invalid email or password"})//wrong
        }
        bcrypt.compare(password,savedUser.password)
        .then(domatch => {
            if(domatch){
                // res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token})
            }
            else{
                res.status(422).json({error:"Invalid email or password"})
            }
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})


module.exports = router
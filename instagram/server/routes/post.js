const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const requireLogin = require('../middleware/requireLogin')


router.get('/allpost',(req,res) =>{
    Post.find()
    // .populate("postedBy","_id name")
    .then(posts => {
        // console.log(posts);
        res.json({posts})
    }).catch(err => console.log(err))
})



router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body} = req.body
    if(!title || !body){
       return res.status(422).json({errr:"Please add all the fields"})
    }
    // console.log(req.user)
    // res.send("ok")
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result =>{
            res.json({post:result})
    }).catch(err => console.log(err))
})



router.get('/mypost',requireLogin,(req,res)=>{
    console.log(req.user._id);
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then((mypost) => {
        res.json(mypost)
        console.log(mypost);
    })
    .catch(err => {console.log(err)})
})



module.exports = router

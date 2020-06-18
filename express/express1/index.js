const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');



app.use('/static', express.static('public'))
app.set('view engine', 'twig')
app.set('views','./public/views');


app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded
app.use(bodyParser.json())// parse application/json

app.get('/',(req,res)=>{
    res.render('index',{title:"Login-form",message:"Enter username and password"})
})

app.post('/',(req,res)=>{
    res.render('login',{title:"user-details",username:req.body.username, password:req.body.password})
})




// app.get('/about/:a-:b',(req,res)=>{
//     res.render('about',{title:"About",sum:parseInt(req.params.a) + parseInt(req.params.b),
//     sub:parseInt(req.params.a) - parseInt(req.params.b)
//         })
// })

// app.get('/',(req,res)=>{
//     res.render('index1',{title:"tutorials-website",message:"hello world"})
// })
















/*
var myMiddleware = require('./middle.js')//external MW

//create middleware
var Validation = function(req,res,next){
    console.log("middleware work");
    next();
}

var userValidation = function(req,res,next){
    if(req.params.username == 'raaj'){
        console.log(" user validated   ");
    }else{
        console.log("not authorized")
    }
    next();
}


app.use(myMiddleware({ option1: '1', option2: '2' }))
// app.use(userValidation)

app.get('/',Validation,(req,res)=>{
    res.send("hello tutoirial website")
})

app.get('/users/:username',userValidation,(req,res)=>{
    res.send("work userValidation : "+req.params.username)
})

*/




/*
//route method
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));
app.post('/users/profiles', (req, res) => res.send('users profiles data'))
//




//routing path
app.get(/.*fly$/, function (req, res) {
    res.send('route parameter work ')
  })

app.get('/ab*cdefg', function (req, res) {
    console.log(req.params);
    res.send('route parameter work : '+req.params[0])
  })

app.get('/users/:Id?', (req, res) => {
    if(req.params.Id == undefined){
      res.send('All users data access')
    }else{
        res.send('users access data : '+req.params.Id)
    }
});
//




//route parameters
//for hyphen and dot delhi to mumbai
app.get('/flights/:From?.:To?', (req, res) => {
    console.log(req.params);
    res.send("search for flights " + "From: " +req.params.From + " To " +req.params.To )
});

app.get('/users/:Id/book/:BookID', (req, res) => {
    console.log(req.params);
    res.send('users access data : '+req.params.Id + "BookI-ID :"+req.params.BookID)
});

//

*/


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
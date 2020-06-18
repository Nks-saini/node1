//object
// var users = {
//     name : "niti saini",
//     age :23
// }
// console.log(users)


// anonymous function
// var person = function(a,b){
// console.log("hrllo anonymous fn")
// var c =a+b;
// console.log(`the sum of ${c}`);
// }
// person(2,5);

//arrow fn
var users= (a,b) =>{
    var c =a+b;
    console.log("this is a arrow fn",c)
}
users(3,6)

var name ="pradeep";
var lastname ="sahni";

//use in global_object file
module.exports.abc = name;
module.exports.abc2 = lastname;

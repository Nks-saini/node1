function student(){
    this.name = "Nitin saini";
    this.age = 24;
    this.email = "saininks@gmail.com";
}

student.prototype={
            address:"Nainital",
            city:"noida",
            getName: function(){
                return this.name
            },
            getAge: function(){
                return this.age
            }
}

 var std = new student();//create a object of fn
 console.log(std)
 console.log(std.getName()) //access by
 console.log(std.getAge())


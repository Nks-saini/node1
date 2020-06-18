//create and trigger custom event in node js

const events = require('events');
const event =new events.EventEmitter();

event.on('Xyzclick',(a)=>{console.log("first event is triggered "+a)})
event.emit('Xyzclick',"tutuorial website node js series");

event.on('click',(a,b)=>{console.log("sum is :",a+b)})
event.emit('click',4,7);


//define 1 event ko  dusre event me 

const first_event = function(n1,n2){
 console.log("first event triggred : ",n1+n2);
event.emit('abc3');
event.emit('abc2');
}

const second_event = function(n1,n2){
 console.log("second event trigred");
 event.emit('abc4');

}

const third_event = function(n1,n2){
    console.log("third event trigred");
}

const fourth_event = function(n1,n2){
    console.log("fourth_event trigred");
}


event.on('abc1',first_event)
event.on('abc2',second_event)
event.on('abc3',third_event)
event.on('abc4',fourth_event)
event.emit('abc1',4,5);

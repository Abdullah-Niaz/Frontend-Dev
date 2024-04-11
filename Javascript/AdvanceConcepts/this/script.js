// // Global Value of this 
// console.log(this);



// // Fucntion Value of this 
// function add(){
//     console.log(this);
// }
// add();


// // Method Value of this - object
// var obj = {
//     name : function(){
//         console.log(this);
//     }
// }
// obj.name();


// // Fucntion inside function -window (es5)

// var obj ={
//     name : function(){
//         console.log("Values as a object: " + this.age);
//         function add(){
//             console.log("Values as a window: " + this.age);
//         }
//         add();
//     },
//     age : 20,
//     location: "Lahore"
// }
// obj.name();

// Function inside Fucntion - object (es6)
// Functions in es6 takes up the value from the parent 
// if the parent is window, then it will become window
// if the parent is object, then it will become object

// var obj = {
//     rol: 20,
//     class:10,
//     name : function(){
//         console.log(this);
//         const child = () => {
//             console.log(this);
//         }
//         child();
//     }
// }

// obj.name();

// const obj = {
//     name : function add(){
//         // returning es5 Function 
//         console.log(this);
//     }
    
    // returning es6 Function 
    // which takes es6 value from the parent 
    // helo  : ()=>{
    //     console.log("Value of Var in  inside es6:  " + this);
    // }
// }

// obj.name();
// obj.helo();




// const objj = {
//     name : "Ali",
//     age : 20,
//     sayName : function(){
//         console.log(this);
//     }
// }
// objj.sayName();


// What is the value of this inside the constructor Function  -- new blank object 

// function add(){
//     console.log(this);
// }
// const ans = new add();

// Value of this inside the constructor function 
document.querySelector("button").addEventListener("Click",function (){
    console.log(this);
})






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

var obj = {
    rol: 20,
    class:10,
    name : function(){
        console.log(this);
        const child = () => {
            console.log(this);
        }
        child();
    }
}

obj.name();
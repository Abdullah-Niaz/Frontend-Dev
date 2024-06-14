
// settimeout - Runs after taking few time
// it will run after 1S 
// if there is any sync before and after the function 
// they will run before the settimeout call

console.log("hello World");
console.log("hello World");
setTimeout(() => {
    console.log("Hello World");
}, 1000); 
console.log("hello World");
console.log("hello World");
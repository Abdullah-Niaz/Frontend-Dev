// call, bind , apply 
// These are the function method to call. By supposing any object as this 


function add(a,b){
    console.log(this,a,b);
    // console.log(this.a + this.b);
}

var obj = {
    a: 10,
    b: 20
}

// add();
// add.call(12); // it will become acording to the call 
// add.apply(obj,[1,2]);      // first argument is object and the second is array 


// bind is just like call, but it retruns an other function , which you can other further 
let binded1 = add.bind(obj);
let binded2 = add.bind(obj,[1,2]);
binded1();
binded2();

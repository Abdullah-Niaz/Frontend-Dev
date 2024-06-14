// setInterval kuch der bad bar bar chly ga
// Y given time k ander bar bar chalta rahy ga
var count = 1;
let hmarinter = setInterval(() => {
    console.log(count);
    ++count;
    if(count === 5){
        // hmarinter(setInterval);
        clearInterval(hmarinter);
    } 
}, 1000);

// we can stop the setINterval 
// we can make a variale and can call the fucntion side that
// another way is to break it inside the fucntion

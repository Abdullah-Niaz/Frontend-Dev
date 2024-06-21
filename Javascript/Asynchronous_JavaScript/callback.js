function f(a,b) {
    b();
}f(1,function ()  {
    console.log("callback Challa");
})
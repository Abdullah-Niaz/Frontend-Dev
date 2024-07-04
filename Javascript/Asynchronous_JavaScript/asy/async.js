async function abcd(){
    var a = await fetch("https://randomuser.me/api/");
    console.log(a);
}

abcd();
// settimeout - Runs after taking few time
// it will run after 1S 
// if there is any sync before and after the function 
// they will run before the settimeout call
// console.log("Hello World 1");
// console.log("Hello World 2");
// setTimeout(() => {
//     console.log("Hello World");
// }, 1000); 
// console.log("Hello World 3");
// console.log("Hello World 4");


// setInterval kuch der bad bar bar chly ga
// Y given time k ander bar bar chalta rahy ga
// var count = 1;
// let hmarinter = setInterval(() => {
//     console.log(count);
//     ++count;
//     if(count === 5){
//         // hmarinter(setInterval);
//         clearInterval(hmarinter);
//     } 
// }, 1000);

// we can stop the setINterval 
// we can make a variale and can call the fucntion side that
// another way is to break it inside the fucntion




// Fetch API -- data ly kar use kar ga, ya pher de ga form urls
// fetch('https://randomuser.me/api/')
// .then(raw => raw.json())
// .then(readData => console.log(readData.results[0]));


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(raw => raw.json())
// .then(readable => console.log(readable.userID[1]))



const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(posts => {
        posts.forEach(post => {
            console.log("Title:", post.title);
            console.log("Body:", post.body);
            console.log("User ID:", post.userId);
            console.log("ID:", post.id);
            console.log();
            if(post.id == 3){
                return 0;
            }
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

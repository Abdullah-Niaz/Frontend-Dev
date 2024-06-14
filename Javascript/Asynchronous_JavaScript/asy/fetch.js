
// Fetch API -- data ly kar use kar ga, ya pher de ga form urls
// fetch('https://randomuser.me/api/')
// .then(raw => raw.json())
// .then(readData => console.log(readData.results[0]));


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(raw => raw.json())
// .then(readable => console.log(readable.userID[1]))

// fetch("https://api.openweathermap.org/data/2.5/weather")
// .then(raw => raw.json())
// .then(readable => console.log(readable))


// fetch("https://api.github.com/repos/Abdullah-Niaz/Data-Structure-Algorithm")
// .then(raw => raw.json())
// .then(readable => console.log(readable))



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

new Promise(function (resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(raw => raw.json())
        .then(result => resolve(result))
        .catch(error => reject(error));
})
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

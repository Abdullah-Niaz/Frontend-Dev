// Axious 
// Axios are similar to the Fetch API But...
// Axios is a promise based HTTP client for the browser and Node.js.
// Axios provides a simple to use library in a small package with a very extensible interface.
axios.get("https://randomuser.me/api/")
.then((result) => {
    console.log(result)   
}).catch((err) => {
    console.log("Error in Fetching")
});
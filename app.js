
// Fetch data from local file & Create Dino Objects
fetch("./dino.json").then(res => {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Oops! Something went wrong! Please try again.');
    }
}).then(data => {
    console.log(data);
}).catch(error => {
    alert(error.message);
});


const express = require('express');

// get an instance of express
const app = express();

// Use the public directory we made for static files
app.use(express.static('server/public'));

// Array of cats to send to client
let catArray = ['Tuna', 'Mackerel'];

// Array of dogs to send to client
let dogArray = ['Thompson', 'Winnie', 'Treo'];

// We can get things that are NOT in a file
app.get('/cats', function(req, res) {
   console.log(`in get cats`);
   // Good servers always respond
   res.send(catArray);
});

app.get('/dogs', (req, res) => {
   console.log(`in get dogs`);
   // Good servers ALWAYS respond
   res.send(dogArray);
})

// set port number, direct port listener
const port = 5000;
app.listen(port, function() {
   console.log(`Listening on port ${port}...`);
});

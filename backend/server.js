const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can change this port if needed

// Define a route to serve a basic HTML template
app.get('/', (req, res) => {
  res.send("Hello World Template!");
});


app.get('/audio/:fileName', (req, res) => {
  // Sending the audio file when requested
  const {fileName} = req.params
  res.sendFile(path.join(__dirname, `/Modules/Listening/mp3 files/${ fileName }.mp3`));
  console.log(`requested resource ${fileName}`)
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});









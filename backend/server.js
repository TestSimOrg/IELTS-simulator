import express from 'express';
import path from 'path';
import fs from 'fs/promises';

const app = express();
const port = 3000; // You can change this port if needed

// Define a route to serve a basic HTML template
app.get('/', (req, res) => {
  res.send("Hello World Template!");
});

app.get('/audio/:fileName', (req, res) => {
  // Sending the audio file when requested
  const { fileName } = req.params;
  res.sendFile(path.join(__dirname, `/Modules/Listening/mp3 files/${fileName}.mp3`));
  console.log(`requested resource ${fileName}`);
});

// app.get('/l/ans/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const filePath = path.resolve(`./Modules/Listening/ans/${id}.json`);
    
//     // Read the JSON file asynchronously
//     const jsonData = await fs.readFile(filePath, 'utf-8');
    
//     // Parse JSON data
//     const parsedData = JSON.parse(jsonData);
    
//     // Send the parsed JSON as response
//     res.json(parsedData);
//   } catch (err) {
//     // If an error occurs, send an error response
//     res.status(500).json({ error: err.message });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

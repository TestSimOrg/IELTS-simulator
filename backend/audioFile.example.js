
// sending audio file to frontend example
app.get('/audio/:fileName', (req, res) => {
    // Sending the audio file when requested
    const { fileName } = req.params;
    res.sendFile(path.join(__dirname, `/Modules/Listening/mp3 files/${fileName}.mp3`));
    console.log(`requested resource ${fileName}`);
  });

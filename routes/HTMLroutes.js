const HTMLroute = require('express').Router();
const path = require('path');


HTMLroute.get('/', (req, res) =>  res.sendFile(path.join(__dirname, '../public/index.html')))

HTMLroute.get('/notes', (req, res) =>  res.sendFile(path.join(__dirname, '../public/notes.html')))

// Moved this to server.js
// HTMLroute.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = HTMLroute;
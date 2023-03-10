const APIroute = require('express').Router();
const dbData = require('../db/db.json');
const { writeToFile } = require('../helpers/util');
const uniqid = require("uniqid");

APIroute.get('/api/notes', (req, res) =>  res.json(dbData))

APIroute.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received`);
    console.log(req.body);
    req.body.id = uniqid();
    dbData.push(req.body);

    writeToFile('./db/db.json', dbData);
    res.json(dbData);
});

// Loop through length of db.json and if the id matches with the URL parameter, splice it out and break out of function
APIroute.delete('/api/notes/:id', (req, res) => {
    for (let i = 0; i < dbData.length; i++) {
        if (dbData[i].id === req.params.id) {
            dbData.splice(i, 1);
            break;
        }
    }
    res.json(dbData)
})

module.exports = APIroute;
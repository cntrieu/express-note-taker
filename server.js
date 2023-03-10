const express = require('express');
const path = require('path');
const HTMLroute = require('./routes/HTMLroutes')
const APIroute = require('./routes/APIroutes')

// process.env.port makes it so production servers have the ability to change the port to whatever is servicable whereas in local development, it will use 3001
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(HTMLroute);
app.use(APIroute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at ${PORT}`)
);


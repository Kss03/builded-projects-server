const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/', express.static(__dirname + "/public/cv-layout"));
app.use('/marvel-api', express.static(__dirname + "/public/marvel-api"));

app.all("*", (req, res) => {
  res.status(404).json("resource not found")
})

app.listen(port, console.log(`server is listening on the port ${port}`));
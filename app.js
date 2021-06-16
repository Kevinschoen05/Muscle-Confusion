const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
  })

app.listen(3000, ()=>{
    console.log("app running on port 3000");
  })
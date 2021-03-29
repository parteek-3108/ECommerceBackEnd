const express = require("express");
var fs = require("fs");
var cors = require("cors");
var app = express();
app.use(cors());
const port = 4000;
app.get("/", function (req, res) {
  console.log("Home Page");
  res.send("Home page");
});
app.get("/getProducts", function (req, res) {
  console.log("Trying to fetch");
  fs.readFile("src/Data.json", function (err, data) {
    if (err) {
      res.send("error");
    } else {
      res.set("Content-Type", "application/json");
      res.send(JSON.parse(data).ProductData);
    }
  });
});
app.get("/getCart", function (req, res) {
  console.log("Trying to fetch");
  fs.readFile("src/CartData.json", function (err, data) {
    if (err) {
      res.send("error");
    } else {
      res.set("Content-Type", "application/json");
      res.send(JSON.parse(data).ProductData);
    }
  });
});
app.listen(port, function (err) {
  if (err) {
    console.log("Failed");
  } else {
    console.log("Successful");
  }
});

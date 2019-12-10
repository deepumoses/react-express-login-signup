const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

var cors = require("cors");

const data = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

app.post("/login", (req, res) => {
  console.log(req.body);
  const updatedData = data.filter(
    val =>
      val.username === req.body.username && val.password === req.body.password
  );
  const error = {
    error: 404,
    message: "Invalid Username/Password"
  };
  if (updatedData.length) {
    res.status(200).json(updatedData);
  } else {
    res.status(404).json(error);
  }
});

app.post("/user", (req, res) => {
  const submittedData = {
    id: data[data.length - 1].id + 1,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    country: req.body.country
  };

  const updatedData = [...data, submittedData];
  fs.writeFileSync(`${__dirname}/data/data.json`, JSON.stringify(updatedData));
  if (updatedData.length) {
    res.status(200).send(updatedData);
  } else {
    res
      .status(404)
      .send("Unable to signup at the moment. Please try again later");
  }
});

module.exports = app;

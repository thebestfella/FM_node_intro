const express = require("express");
const morgan = require("morgan");
const { urlencoded, json } = require("body-parser");
const users = require("./users");
const app = express();

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());

console.log("heyhey");

app.get("/user/:id", async (req, res) => {
  debugger;
  //node --inspect index.js
  //chrome://inspect

  const id = req.param.id;
  console.log(req.param.id);
  // should ge user by given id in route param
  const user = await users.findUser((user) => user.id === id);
  res.status(200).send(user);
});

console.log("heyhey2");

app.delete("/user/:id", async (req, res) => {
  const id = req.id;
  await users.deleteUser(id);
  res.status(201).send({ id });
});

console.log("heyhey3");

module.exports = app;

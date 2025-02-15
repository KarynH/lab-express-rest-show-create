const express = require("express");
const logArray = require("../models/log.js");

//INSTINTIATE ROUTING
const logs = express.Router();

//INDEX, GET, READ
logs.get("/", (req, res) => {
  res.json(logArray);
});

//SHOW, GET, READ
logs.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (logArray[id]) {
    res.json(logArray[id]);
  } else {
    res.redirect(404);
  }
});

//CREATE, POST, CEATE
logs.post("/", (req, res) => {
  logArray.push(req.body);
  res.json(logArray[logArray.length - 1]);
});

//UPDATE, DELETE

logs.delete("/:id", (req, res) => {
let index = logArray.findIndex(item => item.id === req.params.id);
res.json(logArray.splice(index, 1))

});

logs.get("/order", (req, res) => {
    
})

module.exports = logs;
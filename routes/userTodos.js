const express = require("express");
const router = express.Router();

// this is where we put the models functions
const { getAllUserToDos, createToDo } = require("../models/UserTodos.js");

router.get("/", async function (req, res) {
  const response = await getAllUserToDos();
  res.json({ success: true, payload: response });
});

router.post("/", async function (req, res) {
  const toDoData = req.body
  const response = await createToDo(toDoData);
  res.json({ success: true, payload: response });
});

module.exports = router;

const express = require("express");
const router = express.Router();

// this is where we put the models functions
const { getAllUserTodos } = require("../models/UserTodos.js");

router.get("/", async function (req, res) {
  const response = await getAllUserTodos();
  res.json({ success: true, payload: response });
});

module.exports = router;

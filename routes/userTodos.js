const express = require("express");
const router = express.Router();

// this is where we put the models functions
const {
  getAllUserToDos,
  createToDo,
  deleteToDo,
  editToDoTitle,
  //   editToDoPriority,
  //   editToDoDone,
} = require("../models/UserTodos.js");

router.get("/", async function (req, res) {
  const response = await getAllUserToDos();
  res.json({ success: true, payload: response });
});

router.post("/", async function (req, res) {
  const toDoData = req.body;
  const response = await createToDo(toDoData);
  res.json({ success: true, payload: response });
});

router.delete("/:id", async function (req, res) {
  const result = await deleteToDo(req.params.id);
  res.json({ success: true, payload: result });
});

//edit the title only
router.patch("/:id", async function (req, res) {
  const editData = req.body;
  const result = await editToDoTitle(req.params.id, editData);
  res.json({ success: true, payload: result });
});

module.exports = router;

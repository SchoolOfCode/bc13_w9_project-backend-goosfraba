/** Express router providing user related routes
 * @module routers/users
 * @requires express
 */

/**
 * express module
 * @const
 */
const express = require("express");

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace toDoRouter
 */
const router = express.Router();

// this is where we import the models functions
const {
  getAllUserToDos,
  createToDo,
  deleteToDo,
  editToDoTitle,
  //   editToDoPriority,
  //   editToDoDone,
} = require("../models/UserTodos.js");

router.get("/", async function (req, res) {
  /**
   * @const response
   * @type {function}
   * - this is a function in models that makes an SQL query to the database and returns all the todos
   */
  const response = await getAllUserToDos();
  res.json({ success: true, payload: response });
});

/**
 * POST request
 * is the request body
 * @const toDoDatathis
 */
router.post("/", async function (req, res) {
  /**
   * @const toDoData
   * @type {JSON}
   * Variable to store our request JSON body data
   */
  const toDoData = req.body;
  /**
   * @const response
   * @type {function}
   * this is a function in models that makes an SQL query to create a new todo using the toDoData
   */
  const response = await createToDo(toDoData);
  res.json({ success: true, payload: response });
});

/**
 * DELETE request
 *
 */
router.delete("/:id", async function (req, res) {
  /**
   * @const result  - This is a models function that takes in a url param argument of id for deleting a specific todo
   * @type {function}
   * This is a function from models that deletes a todo. It takes in the request url params of id to decide which todo to delete
   */
  const result = await deleteToDo(req.params.id);
  res.json({ success: true, payload: result });
});

/**
 * PATCH request
 * This is for editing the title of our todos.
 */
//edit the title only
router.patch("/:id", async function (req, res) {
  /**
   * @const editData - This is the request JSON body
   */
  const editData = req.body;
  /**
   * @const result - This is a models function that takes in two arguments, the url param of id and  the edit data variable to edit the todo title
   */
  const result = await editToDoTitle(req.params.id, editData);
  res.json({ success: true, payload: result });
});

/**
 *exporting the router to app.js to be used.
 */
module.exports = router;

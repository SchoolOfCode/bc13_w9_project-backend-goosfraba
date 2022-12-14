const { query } = require("../data/index.js");

/**
 * This is a get request SQL query getting all Todos
 * @returns {json} containing all of the todos information
 */

async function getAllUserToDos() {
  const result = await query("SELECT * FROM user_todos");
  return result.rows;
}

/**
 *
 * @param {object} toDo is the request body
 * The SQL query inserts into the user_todos table two values: 1. user_todo_id and 2. to_do_title
 * @returns {json} containing all of the todos information
 */

async function createToDo(toDo) {
  const { user_todo_id, to_do_title } = toDo;
  const result = await query(
    `INSERT INTO user_todos(user_todo_id, to_do_title) VALUES ($1, $2)`,
    [user_todo_id, to_do_title]
  );

  return result.rows;
}

/**
 *
 * @param {number} id - This is the todo_id of the todo that we are deleting
 * @returns {json} - returning just the deleted row
 */
async function deleteToDo(id) {
  const result = await query(
    "DELETE FROM user_todos WHERE todo_id = $1 RETURNING *;",
    [id]
  );
  return result.rows[0];
}

/**
 *
 * @param {number} id - This is the todo_id of the todo title that we are editing
 * @param {JSON} updates - This is the text to be updated
 * @returns {JSON} - containing all of the todos information
 */

async function editToDoTitle(id, updates) {
  const { to_do_title } = updates;
  const result = await query(
    "UPDATE user_todos SET to_do_title = $1 WHERE todo_id = $2 RETURNING *;",
    [to_do_title, id]
  );

  return result.rows;
}

//===== EDIT ALL BITS OF TODO
// async function editToDo(id, updates) {
//   const { to_do_title, done, priority } = updates;
//   const result = query(
//     "UPDATE user_todos SET to_do_title = $1, done = $2, priority = $3 WHERE todo_id = $4 RETURNING *;",
//     [to_do_title, done, priority, id]
//   );

//   return result.rows;
// }

// async function editToDoDone(id, updates) {
//   const { done } = updates;
//   const result = query(
//     "UPDATE user_todos SET done = $1 WHERE todo_id = $2 RETURNING *;",
//     [done, id]
//   );

//   return result.rows;
// }

// async function editToDoPriority(id, updates) {
//   const { priority } = updates;
//   const result = query(
//     "UPDATE user_todos SET priority = $1 WHERE todo_id = $2 RETURNING *;",
//     [priority, id]
//   );

//   return result.rows;
// }

module.exports = {
  getAllUserToDos,
  createToDo,
  deleteToDo,
  editToDoTitle,
  //   editToDoPriority,
  //   editToDoDone,
};

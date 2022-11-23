const { query } = require("../data/index.js");

async function getAllUserToDos() {
  const result = await query("SELECT * FROM user_todos");
  return result.rows;
}

async function createToDo(toDo) {
  const { user_todo_id, to_do_title } = toDo;
  const result = await query(
    `INSERT INTO user_todos(user_todo_id, to_do_title) VALUES ($1, $2)`,
    [user_todo_id, to_do_title]
  );

  return result.rows;
}

/*
empty payload ^^^^
*/

async function deleteToDo(id) {
  const result = await query(
    "DELETE FROM user_todos WHERE todo_id = $1 RETURNING *;",
    [id]
  );
  return result.rows[0];
}

async function editToDo(id, updates) {
  const { to_do_title } = updates;
  const result = query(
    "UPDATE user_todos SET to_do_title = $1 WHERE todo_id = $2 RETURNING *;",
    [to_do_title, id]
  );

  return result.rowsd;
}

module.exports = { getAllUserToDos, createToDo, deleteToDo, editToDo };

const { query } = require("../data/index.js");

async function getAllUserToDos() {
  const result = await query("SELECT * FROM user_todos");
  return result.rows;
}

async function createToDo(toDo) {
  const {user_todo_id, to_do_title} = toDo
  const result = await query(`INSERT INTO user_todos(user_todo_id, to_do_title) VALUES ($1, $2)`, [user_todo_id, to_do_title]);

  return result;
}

/*
empty payload ^^^^
*/

module.exports = { getAllUserToDos, createToDo };

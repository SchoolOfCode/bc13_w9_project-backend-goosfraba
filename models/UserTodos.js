const { query } = require("../data/index.js");

async function getAllUserToDos() {
  const result = await query("SELECT * FROM user_todos");
  return result.rows;
}

module.exports = { getAllUserToDos };

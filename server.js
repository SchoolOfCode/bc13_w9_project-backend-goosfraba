 const app = require("./app.js");

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
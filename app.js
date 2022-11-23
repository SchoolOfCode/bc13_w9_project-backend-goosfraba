const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3000;
const cors = require("cors");

//require our router here/import router here

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//add our app.use routes here:

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const app = express();

const PORT = 3000;

require("../database/connection");

app.listen(PORT, (err) => {
  if (err) return console.log(`Cannot listen on PORT: ${PORT}`);
  console.log(`Server is listening on PORT: ${PORT}`);
});

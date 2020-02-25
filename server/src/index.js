const express = require("express");

const app = express();

const port = process.env.PORT || 1331;

app.listen(port, function() {
  console.log(`listening at http://localhost:1337`);
});

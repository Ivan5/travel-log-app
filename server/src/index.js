const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const middlewares = require("./middlewares");

const app = express();

//middlewares
app.use(morgan("common")); //use to describe the request
app.use(helmet()); //use to remove and add some headers to the page to prevent attacs
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello Wordl" });
});

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log(`listening at http://localhost:${port}`);
});

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const logs = require("./api/logs");

const app = express();

//connect to DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//middlewares
app.use(morgan("common")); //use to describe the request
app.use(helmet()); //use to remove and add some headers to the page to prevent attacs
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Wordl" });
});

app.use("/api/logs", logs);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log(`listening at http://localhost:${port}`);
});

require("dotenv").config();
const compression = require("compression");
const express = require("express");

const cors = require("cors");

const app = express();

app.use(compression());
app.use(express.json());
app.use(cors());

app.use("/", require("./router/router"));

app.listen(process.env.PORT, () => {
  console.log("app is running on port", process.env.PORT);
});

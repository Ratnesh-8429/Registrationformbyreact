// console.log("Welcome to New Year");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const RouterPath = require("./Router");

const app = express();

const port = 7000;

app.use(bodyParser.json());
app.use(cors());
app.use("/",RouterPath);
app.use("/api/user",RouterPath);
app.use("/api/country",RouterPath);
app.use("/api/state",RouterPath);


app.listen(port, ()=> console.log("Server running on port 7000"));
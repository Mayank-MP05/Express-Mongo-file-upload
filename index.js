const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 5000 || process.env.PORT;
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });
const app = express();
app.use(cors());
app.use(bodyParser.json());
//Simple Get Request

const mid1 = (req, res, next) => {
  console.log("Time:", new Date().toLocaleString());
  console.log("moddlewware called");
  next();
};

app.get("/about", mid1, (req, res) => {
  res.json({ user: "MAyank" });
});

let loggein = true;
app.get("/login", (req, res) => {
  if (loggein) {
    res.cookie("first", "0");
    res.sendFile(path.join(__dirname, "public/home.html"));
  } else {
    res.sendFile(path.join(__dirname, "public/login.html"));
  }
});

app.listen(PORT, () => {
  console.log(`Server Started on Port : ${PORT}`);
});

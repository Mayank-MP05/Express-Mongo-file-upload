const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 5000 || process.env.PORT;
const multer = require("multer");
const fs = require("fs");
const uuid = require("uuid");
const upload = multer({ dest: "uploads/" });
const app = express();
app.use(cors());
app.use(bodyParser.json());



//File upload example
app.get("/profile", (req, res) => {
  const file = req.file;
  let newpath = uuid.v4();
  fs.rename(file.path, `./uploads/${newpath}`, function (err) {
    if (err) throw err;
    res.sendFile(path.join(__dirname, `./uploads/${newpath}`));
  });
});

app.listen(PORT, () => {
  console.log(`Server Started on Port : ${PORT}`);
});

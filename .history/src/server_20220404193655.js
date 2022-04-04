const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.sendFile("index.html", { root: "public" });
  let indexPath = path.join(__dirname, "../index.html");
  res.sendFile(indexPath);
});
app.get("/about-me", (req, res) => {
  res.send("Page about me works");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

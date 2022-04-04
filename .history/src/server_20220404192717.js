const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/about-me", (req, res) => {
  res.send("Page about me works");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

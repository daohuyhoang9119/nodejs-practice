const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about-me", (req, res) => {
  res.send("Page about me works");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

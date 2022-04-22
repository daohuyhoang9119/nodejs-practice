import express from "express";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about-me", (req, res) => {
  res.send("HUY HOANG LA TUI");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

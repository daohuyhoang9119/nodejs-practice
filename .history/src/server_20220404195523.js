import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = 3000;

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

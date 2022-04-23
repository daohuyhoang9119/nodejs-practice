import express from "express";
import { route } from "express/lib/application";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.render("../views/index.ejs");
  });
  router.get("/about-me", (req, res) => {
    res.send("HUY HOANG LA TUI");
  });
};
// module.exports = initWebRoute;
export default initWebRoute;

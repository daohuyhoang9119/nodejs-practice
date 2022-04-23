import express from "express";
import { route } from "express/lib/application";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about-me", (req, res) => {
    res.send("HUY HOANG LA TUI");
  });
  return app.use("/", router);
};
// module.exports = initWebRoute;
export default initWebRoute;

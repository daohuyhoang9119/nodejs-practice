import express from "express";

const configViewEngine = (app) => {
  app.set("view engine", "ejs");
  app.set("view", "./src/views");
};
export default configViewEngine;

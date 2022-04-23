let getHomePage = (req, res) => {
  //logic
  return res.render("../views/index.ejs");
};

module.exports = {
  getHomePage,
};

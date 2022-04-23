let hetHomePage = (req, res) => {
  return res.render("../views/index.ejs");
};

module.exports = {
  getHomePage,
};

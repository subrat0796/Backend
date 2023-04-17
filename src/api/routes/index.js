// Requiring the routes here
const AuthRoutes = require("./auth.route");
const UserRoutes = require("./user.route");

module.exports = (app) => {
  app.use("/api", AuthRoutes);
  app.use("/api", UserRoutes);
};

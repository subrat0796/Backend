// Requiring the routes here
const AuthRoutes = require("./auth.route");
const UserRoutes = require("./user.route");
const EventRoutes = require("./event.route");

module.exports = (app) => {
  app.use("/api", AuthRoutes);
  app.use("/api", UserRoutes);
  app.use("/api", EventRoutes);
};

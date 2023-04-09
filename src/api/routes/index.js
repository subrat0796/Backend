// Requiring the routes here
const AuthRoutes = require("./auth.route");

module.exports = (app) => {
  app.use("/api", AuthRoutes);
};

/** @format */
const auth = require("../controllers/auth");

module.exports = (app) => {
  app.post("/api/auth/register", auth.registerUser);

  app.post("/api/auth/login", auth.loginUser);

  app.get("/api/auth", auth.getUser);
};

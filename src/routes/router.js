const mainRouter = require("express").Router();
const userController = require("../controllers/UserControler");
const userRouter = require("./UserRoutes");

mainRouter.route("/user").get((req, res) => userController.signUp(req));
module.exports = mainRouter;

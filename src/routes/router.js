const mainRouter = require("express").Router();
const userController = require("../controllers/UserControler");

mainRouter.route("/user").post((req, res) => userController.signUp(req, res));

mainRouter
    .route("/user/signin")
    .post((req, res) => userController.signIn(req, res));

module.exports = mainRouter;

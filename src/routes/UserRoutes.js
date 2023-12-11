const userRouter = require("express").Router();
const UserSiginDTO = require("../dtos/UserSignInDTO");

userRouter.post("/", async (req, res) => {
    const user = new UserSiginDTO("pedro", "teste");
    res.json(user);
});

module.exports = userRouter;

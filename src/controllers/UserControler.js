const SearchUserUseCase = require("../use-cases/SearchUserUseCase");
const SignInUseCase = require("../use-cases/SignInUseCase");
const SignUpUseCase = require("../use-cases/SignUpUseCase");

class UserController {
    #signUpUseCase;
    #signInUseCase;
    #searchUserUseCase;
    constructor() {
        this.#signUpUseCase = new SignUpUseCase();
        this.#signInUseCase = new SignInUseCase();
        this.#searchUserUseCase = new SearchUserUseCase();
    }

    async signUp(req, res) {
        const user = await this.#signUpUseCase.execute(req.body);

        if (user) {
            return res.status(200).json(user);
        }

        return res.status(400).json({ message: "E-mail já existente" });
    }
    async signIn(req, res) {
        const user = await this.#signInUseCase.execute(req.body);
        // if (user.userNotFound) {
        //     res.status(400).send({
        //         message: "Usuário e/ou senha inválidos",
        //     });
        // }

        // if (user.passwordIncorrect) {
        //     res.status(401).send({
        //         message: "Usuário e/ou senha inválidos",
        //     });
        // }

        res.status(200).send(user);

        return;
    }
    async searchUser(req, res) {
        return this.#searchUserUseCase.execute(req.body);
    }
}
const userController = new UserController();

module.exports = userController;

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
        return this.#signUpUseCase.execute(req.body);
    }
    async signIn(req, res) {
        return this.#signInUseCase.execute(req.body);
    }
    async searchUser(req, res) {
        return this.#searchUserUseCase.execute(req.body);
    }
}
const userController = new UserController();

module.exports = userController;

const TokenService = require("../service/TokenService");

class SearchUserUseCase {
    #tokenService;
    constructor() {
        this.#tokenService = new TokenService();
    }
    execute(token) {
        return this.#tokenService.verifyToken(token);
    }
}
module.exports = SearchUserUseCase;

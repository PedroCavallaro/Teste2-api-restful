const UserRepository = require('../repositories/UserRepository');
const PasswordService = require('../service/PasswordService');
const TokenService = require('../service/TokenService');

class SignInUseCase {
    #userRepository;
    #passwordService;
    #tokenService;
    constructor() {
        this.#userRepository = new UserRepository();
        this.#passwordService = new PasswordService();
        this.#tokenService = new TokenService();
    }

    async execute(userSignInDTO) {
        const { email, senha } = userSignInDTO;
        const user = await this.#userRepository.getSignInUSer(email);

        if (!user) return { userNotFound: true };

        const isEqual = await this.#passwordService.comparePassword(
            senha,
            user.senha
        );

        if (!isEqual) return { passwordIncorrect: true };

        const { id, data_criacao, data_atualizacao, ultimo_login } = user;

        const token = this.#tokenService.generateToken(user);

        await this.#userRepository.updateUsersLastLogin(id);

        return {
            id,
            data_criacao,
            data_atualizacao,
            ultimo_login,
            token,
        };
    }
}
module.exports = SignInUseCase;

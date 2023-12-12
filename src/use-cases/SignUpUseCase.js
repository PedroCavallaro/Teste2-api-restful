const UserRepository = require("../repositories/UserRepository");
const PasswordService = require("../service/PasswordService");
const TokenService = require("../service/TokenService");

class SignUpUseCase {
    #userRepository;
    #passwordService;
    #tokenService;
    constructor() {
        this.#userRepository = new UserRepository();
        this.#passwordService = new PasswordService();
        this.#tokenService = new TokenService();
    }

    async execute(createUserDTO) {
        const hashedPassword = await this.#passwordService.generatePasswordHas(
            createUserDTO.senha
        );
        createUserDTO = { ...createUserDTO, senha: hashedPassword };

        const user = await this.#userRepository.saveUser(createUserDTO);

        if (!user) return null;

        const token = this.#tokenService.generateToken(user);

        const { id, data_criacao, data_atualizacao, ultimo_login } = user;

        return {
            id,
            data_criacao,
            data_atualizacao,
            ultimo_login,
            token,
        };
    }
}
module.exports = SignUpUseCase;

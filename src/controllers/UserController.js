const CreateUserDTO = require('../dtos/CreateUserDTO');
const UserSiginDTO = require('../dtos/UserSignInDTO');
const SearchUserUseCase = require('../use-cases/SearchUserUseCase');
const SignInUseCase = require('../use-cases/SignInUseCase');
const SignUpUseCase = require('../use-cases/SignUpUseCase');
const { z } = require('zod');

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
        const schema = z.object({
            nome: z.string(),
            email: z.string().email(),
            senha: z.string(),
            telefones: z.array(
                z.object({
                    numero: z.string(),
                    ddd: z.string(),
                })
            ),
        });
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).send({ message: 'Dados inconsistentes' });
        }
        const { nome, email, senha, telefones } = result.data;

        const createUserDTO = new CreateUserDTO(nome, email, senha, telefones);

        const user = await this.#signUpUseCase.execute(createUserDTO);

        if (typeof user === 'string') {
            return res.status(400).json({ message: 'E-mail já existente' });
        }
        return res.status(200).json(user);
    }
    async signIn(req, res) {
        const schema = z.object({
            email: z.string().email(),
            senha: z.string(),
        });

        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).send({ message: 'Dados inconsistentes' });
        }

        const { email, senha } = result.data;

        const userSignInDTO = new UserSiginDTO(email, senha);

        const user = await this.#signInUseCase.execute(userSignInDTO);

        if (user.userNotFound) {
            return res.status(400).send({
                message: 'Usuário e/ou senha inválidos',
            });
        }

        if (user.passwordIncorrect) {
            return res.status(401).send({
                message: 'Usuário e/ou senha inválidos',
            });
        }

        return res.status(200).send(user);
    }
    async searchUser(req, res) {
        const [type, token] = req.headers.authorization?.split(' ');

        if (type !== 'Bearer') return res.status(400).send();

        const response = this.#searchUserUseCase.execute(token);

        if (typeof response === 'string') {
            return res.status(400).send({ message: response });
        }

        return res.status(200).send(response);
    }
}
const userController = new UserController();

module.exports = userController;

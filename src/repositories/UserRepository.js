const CreateUserDTO = require('../dtos/CreateUserDTO');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

class UserRepository {
    async getSignInUSer(email) {
        const user = await User.findOne({ email: email });

        return user;
    }
    async saveUser(createUserDTO) {
        const { nome, email, senha, telefones } = createUserDTO;

        let user = await User.findOne({ email: email });
        if (!user) {
            user = new CreateUserDTO(nome, email, senha, telefones);

            const additionalInfo = {
                id: uuidv4(),
                data_criacao: new Date(),
                data_atualizacao: new Date(),
                ultimo_login: new Date(),
            };
            const saveUserInfo = { ...createUserDTO, ...additionalInfo };

            const res = await User.create(saveUserInfo);

            return res;
        }
        return null;
    }
    async updateUsersLastLogin(id) {
        const updatedUser = await User.updateOne(
            { id: id },
            {
                $set: { ultimo_login: new Date() },
            }
        );

        return updatedUser;
    }
}

module.exports = UserRepository;

const conn = require('../db/conn');
const { fakerDE: faker } = require('@faker-js/faker');
const UserRepository = require('./UserRepository');

describe('conexao com o banco de dados', () => {
    beforeAll(() => {
        conn();
    });

    const userRepo = new UserRepository();
    describe('criação de um usuário', () => {
        it('sucesso caso o usuario nao existir', async () => {
            const userTeste = {
                nome: 'Pedro',
                email: faker.internet.email(),
                senha: '123',
                telefones: [
                    {
                        numero: '12345667',
                        ddd: '1234',
                    },
                ],
            };

            const user = await userRepo.saveUser(userTeste);

            expect(user).not.toBe(null);
        });
        it('erro caso usuario ja existir', async () => {
            const userTeste2 = {
                nome: 'Pedro',
                email: 'teste@email.com',
                senha: '123',
                telefones: [
                    {
                        numero: '12345667',
                        ddd: '1234',
                    },
                ],
            };

            const user = await userRepo.saveUser(userTeste2);

            expect(user).toBe(null);
        });
    });
    it('retornar usuario se estiver no banco de dados', async () => {
        const user = await userRepo.getSignInUSer('emailasdasd@email.com');

        expect(user).not.toBe(null);
    });
});

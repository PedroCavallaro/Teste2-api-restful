const SignUpUseCase = require('./SignUpUseCase');
const conn = require('../db/conn');
const { fakerDE: faker } = require('@faker-js/faker');

describe('criação de um usuário', () => {
    beforeAll(() => {
        conn();
    });

    const sinUp = new SignUpUseCase();
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

        const user = await sinUp.execute(userTeste);

        expect(user.hasOwnProperty('token')).toBeTruthy();
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

        const user = await sinUp.execute(userTeste2);

        expect(user === 'E-mail ja existente').toBeTruthy();
    });
});

const SignInUseCase = require('./SignInUseCase');

describe('criação de um usuário', () => {
    const sinUp = new SignInUseCase();
    it('sucesso caso o usuario nao existir', async () => {
        const userTeste = {
            nome: 'Pedro',
            email: 'email@email.com',
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

        expect(user.hasOwnProperty('token')).toBeFalse();
    });
});

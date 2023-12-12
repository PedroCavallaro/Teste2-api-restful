const SignInUseCase = require('./SignInUseCase');
const conn = require('../db/conn');
describe('fazer login do usuario', () => {
    beforeAll(() => {
        conn();
    });
    const signIn = new SignInUseCase();
    it('retornar dados se existir no banco de dados', async () => {
        const user = {
            email: 'testasde@email.com',
            senha: '123',
        };

        const response = await signIn.execute(user);

        expect(response.hasOwnProperty('token')).toBeTruthy();
    });
    it('retornar objeto {passwordIncorret} caso email estiver certo mas a senha for incorreta', async () => {
        const user = {
            email: 'testasde@email.com',
            senha: 'senha incorreta',
        };

        const response = await signIn.execute(user);

        expect(response.hasOwnProperty('passwordIncorrect')).toBeTruthy();
    });
    it('retornar objeto {userNotFound} caso email nao estiver cadastrado', async () => {
        const user = {
            email: 'emailTesteNaoCadastrado@email.com',
            senha: '123',
        };

        const response = await signIn.execute(user);

        expect(response.hasOwnProperty('userNotFound')).toBeTruthy();
    });
});

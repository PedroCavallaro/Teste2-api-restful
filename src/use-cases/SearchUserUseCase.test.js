const TokenService = require('../service/TokenService');
const SearchUserUseCase = require('./SearchUserUseCase');

describe('verificação do token', () => {
    const searchUserUseCase = new SearchUserUseCase();
    const ts = new TokenService();
    const user = {
        id: 'asd',
        nome: 'asdad',
        email: 'email@email.com',
    };

    it('token valido', () => {
        const token = ts.generateToken(user);
        const response = searchUserUseCase.execute(token);

        expect(typeof response === 'object').toBe(true);
    });
    it('token invalido', () => {
        const invalidToken =
            'eyJhbGsciOiJIUzI1NiIsInasR5cCI6IkpXVCJ9.eyJpZCI6ImFlZDNlNmJmLWI3ZDgtNGJmMy1hNzBhLWY4NzhjOGM3YWViZCIsIm5vbWUiOiJQZWRybyIsImVtYWlsIjoidGVzYXRhc2RhZUBlbWFpbC5jb20iLCJpYXQiOjE3MDI0MDc3ODMsImV4cCI6MTcwMjQwOTU4M30.hQTfHHM9txUqjl1bLvkZj-P9x31Kwv4h17f7DY0Gl6Y';

        const isValid = searchUserUseCase.execute(invalidToken);

        expect(isValid === 'Não autorizado').toBe(true);
    });
});

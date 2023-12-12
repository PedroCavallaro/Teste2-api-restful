const TokenService = require('./TokenService');

it('geracao do token', () => {
    const tokenService = new TokenService();
    const user = {
        id: 'asd',
        nome: 'asdad',
        email: 'email@email.com',
    };

    const token = tokenService.generateToken(user);

    expect(typeof token === 'string').toBe(true);
});
describe('verificação do token', () => {
    const tokenService = new TokenService();
    const user = {
        id: 'asd',
        nome: 'asdad',
        email: 'email@email.com',
    };

    it('token valido', () => {
        const token = tokenService.generateToken(user);

        const isValid = tokenService.verifyToken(token);

        expect(typeof isValid === 'object').toBe(true);
    });
    it('token invalido', () => {
        const invalidToken =
            'eyJhbGsciOiJIUzI1NiIsInasR5cCI6IkpXVCJ9.eyJpZCI6ImFlZDNlNmJmLWI3ZDgtNGJmMy1hNzBhLWY4NzhjOGM3YWViZCIsIm5vbWUiOiJQZWRybyIsImVtYWlsIjoidGVzYXRhc2RhZUBlbWFpbC5jb20iLCJpYXQiOjE3MDI0MDc3ODMsImV4cCI6MTcwMjQwOTU4M30.hQTfHHM9txUqjl1bLvkZj-P9x31Kwv4h17f7DY0Gl6Y';

        const isValid = tokenService.verifyToken(invalidToken);

        expect(isValid === 'Não autorizado').toBe(true);
    });
    it('token expirado', () => {
        const expiredToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyOTI3OTRmLWE5MzItNDg5Mi1iYzQ3LTVjMWUwZjAyMGI1ZiIsIm5vbWUiOiJQZWRybyIsImVtYWlsIjoidGVzdGVAZW1haWwuY29tIiwiaWF0IjoxNzAyNDExMjY2LCJleHAiOjE3MDI0MTMwNjZ9.llB82RuprTqZc1o2c4tvWsFBrlJllGXTqCZQHqdPUSc';

        const isValid = tokenService.verifyToken(expiredToken);

        expect(isValid === 'Sessão inválida').toBe(true);
    });
});

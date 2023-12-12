const CreateUserDTO = require('../dtos/CreateUserDTO');
const { fakerDE: faker } = require('@faker-js/faker');
const fetchData = require('../test/fetch');
const UserSiginDTO = require('../dtos/UserSignInDTO');
const TokenService = require('../service/TokenService');

describe('teste das rotas', () => {
    describe('rota de signUp', () => {
        const signUpRoute = 'http://localhost:3000/user/new';
        it('dados enviados corretamente para o servidor', async () => {
            const validUser = new CreateUserDTO(
                'Pedro',
                faker.internet.email(),
                'senha',
                [{ numero: '1234', ddd: '11' }]
            );
            const res = await fetchData(validUser, signUpRoute);
            expect(res.status).toBe(200);
        });
        it('dados inconsistentes enviados o servidor', async () => {
            const invalidUser = new CreateUserDTO(
                'Pedro',
                'asdasdasd',
                'senha',
                [{ numero: '1234' }]
            );
            const res = await fetchData(invalidUser, signUpRoute);
            expect(res.status).toBe(400);
        });
        it('email já existir no banco de dados', async () => {
            const validUser = new CreateUserDTO(
                'Pedro',
                'teste@email.com',
                '123',
                [{ numero: '1234', ddd: '11' }]
            );
            const res = await fetchData(validUser, signUpRoute);

            const data = await res.json();

            expect(data.message).toBe('E-mail já existente');
        });
    });
    describe('rota de signIn', () => {
        const signInRoute = 'http://localhost:3000/user/signin';
        it('usuario existir e os dados estiverem corretos', async () => {
            const validUser = new UserSiginDTO('teste@email.com', '123');
            const res = await fetchData(validUser, signInRoute);
            expect(res.status).toBe(200);
        });
        it('usuario nao existir no banco de dados', async () => {
            const invalidUser = new UserSiginDTO(
                'emailNaoCadastrado@email.com',
                '123'
            );
            const res = await fetchData(invalidUser, signInRoute);

            const data = await res.json();
            expect(data.message).toBe('Usuário e/ou senha inválidos');
        });
        it('email cadastrado mas senha invalida', async () => {
            const invalidUser = new UserSiginDTO(
                'teste@email.com',
                'senhaIncorreta'
            );

            const res = await fetchData(invalidUser, signInRoute);

            const data = await res.json();

            expect(
                data.message === 'Usuário e/ou senha inválidos' &&
                    res.status === 401
            ).toBe(true);
        });
    });
    describe('rota de busca', () => {
        const searchRoute = 'http://localhost:3000/user/search';
        it('token valido', async () => {
            const tokeService = new TokenService();
            const userExample = {
                id: '12314',
                name: 'nome',
                email: 'email@email.com',
            };
            const token = tokeService.generateToken(userExample);

            const res = await fetch(searchRoute, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            expect(res.status).toBe(200);
        });

        it('token invalido', async () => {
            const invalidToken =
                'eyJhbGsciOiJIUzI1NiIsInasR5cCI6IkpXVCJ9.eyJpZCI6ImFlZDNlNmJmLWI3ZDgtNGJmMy1hNzBhLWY4NzhjOGM3YWViZCIsIm5vbWUiOiJQZWRybyIsImVtYWlsIjoidGVzYXRhc2RhZUBlbWFpbC5jb20iLCJpYXQiOjE3MDI0MDc3ODMsImV4cCI6MTcwMjQwOTU4M30.hQTfHHM9txUqjl1bLvkZj-P9x31Kwv4h17f7DY0Gl6Y';

            const res = await fetch(searchRoute, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${invalidToken}`,
                },
            });
            const data = await res.json();
            expect(data.message).toBe('Não autorizado');
        });
        it('token expirado', async () => {
            const expiredToken =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyOTI3OTRmLWE5MzItNDg5Mi1iYzQ3LTVjMWUwZjAyMGI1ZiIsIm5vbWUiOiJQZWRybyIsImVtYWlsIjoidGVzdGVAZW1haWwuY29tIiwiaWF0IjoxNzAyNDExMjY2LCJleHAiOjE3MDI0MTMwNjZ9.llB82RuprTqZc1o2c4tvWsFBrlJllGXTqCZQHqdPUSc';

            const res = await fetch(searchRoute, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${expiredToken}`,
                },
            });
            const data = await res.json();
            expect(data.message).toBe('Sessão inválida');
        });
    });
});

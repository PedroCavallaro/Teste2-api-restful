var jwt = require('jsonwebtoken');
class TokenService {
    #secret = 'segredoJWT';
    generateToken(user) {
        return jwt.sign(
            {
                id: user.id,
                nome: user.nome,
                email: user.email,
            },
            this.#secret,
            {
                expiresIn: 30 * 60, //30 min = 1.800 sec
            }
        );
    }
    verifyToken(token) {
        try {
            const decodedToken = jwt.verify(token, this.#secret);

            return { token: decodedToken };
        } catch (err) {
            if (err.message === 'jwt expired') return 'Sessão inválida';
            if (err.message === 'invalid token') return 'Não autorizado';
        }
    }
}
module.exports = TokenService;

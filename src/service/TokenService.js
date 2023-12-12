var jwt = require("jsonwebtoken");
class TokenService {
    generateToken(user) {
        return jwt.sign(
            {
                id: user.id,
                nome: user.nome,
                email: user.email,
            },
            "senhaJWT",
            {
                expiresIn: 30 * 60, //30 min = 1.800 sec
            }
        );
    }
    verifyToken() {}
}
module.exports = TokenService;

const bcrypt = require("bcrypt");

class PasswordService {
    constructor() {}

    async generatePasswordHas(password) {
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return hashedPassword;
    }
    async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
}
module.exports = PasswordService;

const PasswordService = require('./PasswordService');

describe('geração e comparação da senha', () => {
    const passService = new PasswordService();
    const genericPass = '123';
    it('Gerar senha', async () => {
        const hash = await passService.generatePasswordHas(genericPass);
        expect(typeof hash === 'string').toBeTruthy();
    });
    it('retornar falso se as senhas divergirem', async () => {
        const hash = await passService.generatePasswordHas(genericPass);

        const isValid = await passService.comparePassword('abc', hash);
        expect(isValid).toBeFalsy();
    });
    it('retornar true se forem as mesmas', async () => {
        const hash = await passService.generatePasswordHas(genericPass);

        const isValid = passService.comparePassword(genericPass, hash);
        expect(isValid).toBeTruthy();
    });
});

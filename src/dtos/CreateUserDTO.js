class CreateUserDTO {
    nome;
    email;
    senha;
    telefones;

    constructor(nome, email, senha, telefones) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefones = telefones;
    }
}
module.exports = CreateUserDTO;

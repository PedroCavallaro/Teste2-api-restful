<body>
    <main>
        <h1>Segundo desafio técnico</h1>
        <p>Pedro Leme Cavallaro</p>
        <p>Deploy:</p>
        <h4>Desafio</h4>
        <p>
            Desenvolver uma API RESTful para autenticação de usuários, que
            permita operações de cadastro (sign up), autenticação (sign in) e
            recuperação de informações do usuário.
        </p>
        <p>Solução</p>
        <p>
            Para este desafio optei pelo framework Express.js, utilizando o
            MongoDb para salvar as informações dos usuários. Optei por uma
            solução orientada a objetos, fiz uso dos principios da clean
            architecture, como por exemplo ter um use-cases layer, para
            modularizar bem a lógica e tornar um código mais legivel, também
            separei a camada que se comunica com o banco de dados da lógica
            aplicação utilizando o conceito de repositórios, e encapsulei a
            lógica dos endpoints em um controlador, em um controlador. Ademais,
            testes untários foram feitos para garantir a qualidade deste teste
        </p>
        <div>
            <p>Dependências utilizadas:</p>
            <ul>
                <li>bcrypt</li>
                <li>cors</li>
                <li>dotenv</li>
                <li>express</li>
                <li>jsonwebtoken</li>
                <li>mongoose</li>
                <li>uuid</li>
                <li>zod</li>
            </ul>
            <p>Dependências de desenvolvimento:</p>
            <ul>
                <li>nodemon</li>
                <li>jest</li>
                <li>grunt</li>
                <li>faker</li>
            </ul>
        </div>
        <div>
            <h2>Endpoints:</h2>
        </div>
    </main>
</body>

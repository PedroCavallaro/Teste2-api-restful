<body>
    <main>
        <h1>Segundo desafio técnico</h1>
        <p>Pedro Leme Cavallaro</p>
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
            <h2>Deploy</h2>
            <p>Para o deploy escolhi utilizar a vercel, por não ter custos e ser relativamente fácil de se configurar</p>
            <p>link: <a href="https://teste-backend-pedrocavallaro.vercel.app">https://teste-backend-pedrocavallaro.vercel.app</a></p>
            <h2>Endpoints:</h2>
            <ul>
                <li>Criação de usuário: https://teste-backend-pedrocavallaro.vercel.app/user/new</li>
                <li>Login de usuário: https://teste-backend-pedrocavallaro.vercel.app/user/signin</li>
                <li>Busca de usuário: https://teste-backend-pedrocavallaro.vercel.app/user/search</li>
            </ul>
        </div>
        <div>
            <div>
                <h2>Requisitos</h2>
                <ul>
                    <li>Persistência de dados: Os dados são salvos no MongoDb </li>
                    <li>Sistema de build com gerenciamento de dependências: Sempre que o deploy é feito as dependências são atualizadas por meio de um comando </li>
                    <li>Task runner para build: Foi utilizado o Grunt, para minimizar o código</li>
                    <li>Padronização de estilo (ex: jsHint/jsLint): Foi utilizado Eslint junto com Prettierc</li>
                    <li>Framework: Express, Hapi, ou similar: Foi utilizado o frameword Express</li>
                </ul>
            </div>
            <div>
                <h2>Requisitos Desejáveis</h2>
                <ul>
                    <li>
                        JWT como token: Utilizado a biblioteca jsonwebtoken para a geração do token
                    </li>
                    <li>
                         Testes unitáriosÇ Testes unitários foram realizado por meio da biblioteca jest
                    </li>
                    <li>Criptografia hash na senha e token: Criptografia foi feita por meio da biblioteca bcrypt</li>
                </ul>
            </div>

        </div>
    </main>

</body>

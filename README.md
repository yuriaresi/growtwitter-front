GrowTwitter - Aplicação de Rede Social
Visão Geral
O GrowTwitter é uma aplicação de rede social inspirada no Twitter, desenvolvida como projeto final do bloco intermediário. A plataforma oferece funcionalidades essenciais, incluindo a capacidade de criar usuários, fazer login, criar tweets, listar todos os tweets e exibir tweets do perfil logado. Além disso, há uma funcionalidade para editar o perfil do usuário, permitindo a alteração de nome, apelido e foto.

Funcionalidades Principais
Cadastro de Usuário:

Os usuários podem se cadastrar na plataforma fornecendo informações como nome, e-mail e senha.
Login:

A autenticação é realizada por meio de um formulário de login, onde os usuários inserem seu e-mail e senha.
Criação de Tweets:

Os usuários podem compartilhar suas ideias e pensamentos por meio da criação de tweets.
Listagem de Tweets:

Todos os tweets da comunidade podem ser visualizados em uma página específica.
Listagem de Tweets do Perfil Logado:

Os tweets específicos do usuário logado são exibidos em uma seção dedicada.
Edição de Perfil do Usuário:

Os usuários têm a capacidade de editar seu perfil, incluindo a alteração de nome, apelido e foto.
Tecnologias Utilizadas
Frontend:

ReactJS
Styled Components
Backend:

Node.js
Express.js
MYSQL (ou outro banco de dados de sua escolha)
Gerenciamento de Estado:

React Context API
Autenticação:



Axios para comunicação com o backend
Instruções de Instalação
Clone o repositório:

bash
Copy code
git clone https://github.com/yuriaresi/growtwitter-front.git *PARA O FRONT END* 
git clone https://github.com/yuriaresi/atividade-final-GrowTwitter.git *PARA O BACK END*
Instale as dependências do frontend e backend:

bash
Copy code
cd growtwitter/frontend
npm install

cd ../backend
npm install
Configure o banco de dados:

Utilize o mysql ou o banco de dados de sua escolha.
Configure as credenciais de conexão no arquivo .env no diretório backend.
Inicie o frontend e o backend:

bash
Copy code
# No diretório growtwitter/frontend
npm run dev

# No diretório growtwitter/backend
npm run dev
Acesse a aplicação no navegador:

http://localhost:3333
Contribuições e Problemas
Sinta-se à vontade para contribuir com melhorias, correções ou relatar problemas. Utilize o sistema de issues para reportar problemas ou enviar pull requests para contribuições.
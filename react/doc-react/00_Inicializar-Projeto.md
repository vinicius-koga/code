============================================================
              INICIALIZANDO UM PROJETO REACT
============================================================

React é uma biblioteca JavaScript utilizada para construir interfaces
de usuário (UI), permitindo dividir a aplicação em componentes reutilizáveis.

Para criar um projeto React, podemos utilizar o Vite, uma ferramenta que
configura o ambiente de desenvolvimento e oferece recursos como servidor
local e atualização automática da página durante o desenvolvimento.

O Vite permite criar projetos React com JavaScript ou TypeScript.


============================================================
              CRIANDO UM PROJETO REACT
============================================================

Execute o comando abaixo no terminal:

# npm create vite@latest

O comando inicia o assistente de criação de projetos do Vite.

Durante a criação, será necessário escolher:

- Project name -> nome do projeto.
- Framework -> React.
- Variant -> JavaScript ou TypeScript.

Exemplo de escolhas:

# Project name: my-react-app
# Framework: React
# Variant: TypeScript


============================================================
             ACESSANDO A PASTA DO PROJETO
============================================================

Após criar o projeto, entre na pasta criada:

# cd my-react-app

O comando cd (Change Directory) permite navegar entre pastas pelo terminal.

É necessário estar dentro da pasta do projeto para executar os próximos
comandos corretamente.


============================================================
              INSTALANDO AS DEPENDÊNCIAS
============================================================

Execute:

# npm install

O npm lerá o package.json e instalará as dependências necessárias,
criando a pasta node_modules.

Entre elas, estarão o React, o React DOM e as ferramentas de desenvolvimento
definidas pelo projeto.


============================================================
             INICIANDO O SERVIDOR LOCAL
============================================================

Execute:

# npm run dev

O Vite iniciará o servidor de desenvolvimento e exibirá um endereço local,
normalmente semelhante a:

# http://localhost:5173/

Abra esse endereço no navegador para visualizar a aplicação.

O servidor permite que alterações no código sejam refletidas no navegador
automaticamente, sem precisar reiniciar o servidor a cada modificação.


============================================================
              ESTRUTURA DO PROJETO REACT
============================================================

Um projeto React criado com Vite e TypeScript normalmente possui:

# my-react-app/
#
# ├── node_modules/
# ├── public/
# ├── src/
# │   ├── assets/
# │   ├── App.tsx
# │   ├── main.tsx
# │   └── index.css
# ├── index.html
# ├── package.json
# ├── package-lock.json
# └── vite.config.ts

Principais arquivos e pastas:

- node_modules -> dependências instaladas.
- public -> arquivos públicos, como imagens e ícones.
- src -> código-fonte da aplicação.
- App.tsx -> componente principal da aplicação.
- main.tsx -> ponto de entrada que renderiza o React.
- index.html -> documento HTML inicial.
- package.json -> dependências e scripts do projeto.
- package-lock.json -> registra as versões exatas das dependências
  instaladas, facilitando a reprodução do ambiente.
- vite.config.ts -> configurações do Vite.


============================================================
             EXECUTANDO OS SCRIPTS DO PROJETO
============================================================

Os scripts disponíveis ficam registrados na propriedade "scripts"
do arquivo package.json.

Em um projeto Vite, os principais comandos são:

# npm run dev

Inicia o servidor de desenvolvimento.

# npm run build

Compila a aplicação para produção, gerando os arquivos finais
normalmente na pasta dist/.

# npm run preview

Inicia um servidor local para visualizar a versão compilada.

Os scripts são executados pelo npm utilizando os comandos definidos
no package.json.


============================================================
             CRIANDO UM PROJETO EM UMA PASTA ATUAL
============================================================

Para criar um projeto React na pasta atual, sem criar uma subpasta
com o nome do projeto, execute:

# npm create vite@latest .

O ponto (.) indica que o projeto deve ser criado no diretório atual.

Depois, instale as dependências e inicie o servidor:

# npm install
# npm run dev


============================================================
               ENCERRANDO O SERVIDOR
============================================================

Para encerrar o servidor de desenvolvimento, pressione:

# Ctrl + C

O comando interrompe a execução do servidor no terminal.
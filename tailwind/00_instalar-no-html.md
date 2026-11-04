============================================================
                 INSTALANDO O TAILWIND
============================================================

Primeiramente, inicialize o projeto Node.js:

# npm init -y

Esse comando cria o arquivo package.json, responsável por registrar as 
dependências e configurações do projeto.

Em seguida, instale o Tailwind CSS e sua ferramenta de compilação (CLI):

# npm install tailwindcss @tailwindcss/cli

- tailwindcss: contém o framework e suas funcionalidades.
- @tailwindcss/cli: disponibiliza os comandos necessários para compilar 
  os arquivos CSS.


============================================================
               CONFIGURANDO O TAILWIND
============================================================

Crie um arquivo CSS que servirá como ponto de entrada do Tailwind.

Exemplo de estrutura:

meu-projeto/
│
├── index.html
├── package.json
│
├── src/
│   └── input.css
│
└── dist/
    └── output.css

No arquivo input.css, adicione:

# @import "tailwindcss";

Essa instrução importa o Tailwind CSS para que suas funcionalidades 
possam ser processadas pelo compilador.


============================================================
                COMPILANDO O TAILWIND
============================================================

O Tailwind precisa identificar as classes utilizadas nos arquivos HTML 
e gerar um arquivo CSS contendo apenas os estilos necessários.

Para isso, execute:

# npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch

Entendendo os parâmetros:

- -i: define o arquivo CSS de entrada (input).
- -o: define o arquivo CSS de saída (output).
- --watch: monitora alterações nos arquivos e recompila automaticamente.

O arquivo output.css será gerado automaticamente dentro da pasta dist.

IMPORTANTE:

O terminal precisa permanecer aberto enquanto o modo --watch estiver 
em execução, pois ele monitora as alterações do projeto continuamente.


============================================================
                 IMPORTANDO NO HTML
============================================================

Após a compilação, precisamos importar o arquivo CSS gerado no HTML.

Dentro da tag <head>, adicione:

# <link href="./dist/output.css" rel="stylesheet">

Agora podemos utilizar as classes do Tailwind diretamente nos elementos HTML.

Exemplo:

# <h1 class="text-3xl font-bold text-blue-500">
#     Olá, mundo!
# </h1>
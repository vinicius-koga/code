============================================================
                 INSTALANDO AS DEPENDÊNCIAS
============================================================

No terminal, acesse a pasta do seu projeto React + Vite.

Instale o Tailwind CSS e seu plugin oficial para Vite:

# npm install tailwindcss @tailwindcss/vite

O pacote tailwindcss contém o framework CSS.

O pacote @tailwindcss/vite integra o Tailwind ao processo de compilação
do Vite, permitindo que ele identifique as classes utilizadas no projeto
e gere os estilos correspondentes.

Esses pacotes serão adicionados ao package.json como dependências do projeto.


============================================================
              CONFIGURANDO O VITE
============================================================

Abra o arquivo vite.config.ts ou vite.config.js, localizado na raiz
do projeto.

Adicione o plugin do Tailwind à configuração existente.

Exemplo para um projeto React com TypeScript:

# vite.config.ts

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

O plugin tailwindcss() permite que o Vite processe o Tailwind CSS.

IMPORTANTE:

Se o arquivo já possuir configurações adicionais, mantenha-as.
Apenas importe o plugin e adicione tailwindcss() ao array plugins.


============================================================
              IMPORTANDO O TAILWIND CSS
============================================================

Abra o arquivo CSS principal do projeto, normalmente src/index.css
ou src/App.css.

Adicione a seguinte instrução:

# @import "tailwindcss";

Essa instrução importa o Tailwind CSS e permite utilizar suas classes
utilitárias nos componentes React.

Se você já possui regras CSS nesse arquivo, pode mantê-las.


============================================================
             IMPORTANDO O ARQUIVO CSS
============================================================

Certifique-se de que o arquivo CSS principal está sendo importado
pelo ponto de entrada da aplicação React.

Normalmente, isso é feito no arquivo src/main.tsx ou src/main.jsx.

Exemplo:

# src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

A linha import './index.css' carrega os estilos globais da aplicação.

Se o seu projeto já possui essa importação, não é necessário adicioná-la
novamente.


============================================================
                UTILIZANDO O TAILWIND
============================================================

Após a configuração, você poderá utilizar as classes do Tailwind
diretamente nos elementos JSX dos componentes React.

Exemplo:

# src/App.tsx

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Olá, Tailwind CSS!
      </h1>
    </div>
  )
}

export default App

Explicação das classes:

- flex: ativa o Flexbox.
- min-h-screen: define a altura mínima como a altura da tela.
- items-center: centraliza os itens no eixo transversal.
- justify-center: centraliza os itens no eixo principal.
- bg-gray-100: define a cor de fundo.
- text-3xl: aumenta o tamanho da fonte.
- font-bold: aplica negrito.
- text-blue-600: define a cor do texto.

No React, utiliza-se className em vez de class para definir as classes
dos elementos JSX.
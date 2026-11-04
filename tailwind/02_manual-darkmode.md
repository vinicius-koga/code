============================================================
              COLOR-SCHEME SUPPORT NO TAILWIND CSS
============================================================

O Tailwind CSS permite aplicar estilos diferentes dependendo do esquema
de cores (Color Scheme) utilizado pela aplicação.

Isso é especialmente útil para implementar temas como modo claro (Light Mode)
e modo escuro (Dark Mode).

Para isso, utilizamos variantes como dark:, que aplicam uma classe
somente quando a condição correspondente é atendida.


============================================================
                  UTILIZANDO A VARIANTE DARK:
============================================================

A variante dark: permite aplicar estilos específicos para o modo escuro.

Sintaxe:

# dark:classe-tailwind

Exemplo:

<div class="bg-white text-black dark:bg-black dark:text-white">
    Conteúdo
</div>

No modo claro:
- bg-white → fundo branco
- text-black → texto preto

No modo escuro:
- dark:bg-black → fundo preto
- dark:text-white → texto branco

Quando o modo escuro estiver ativo, as classes dark: terão prioridade
sobre as classes correspondentes do modo claro.


============================================================
              DETECTANDO O COLOR-SCHEME DO SISTEMA
============================================================

Por padrão, o Tailwind CSS v4 utiliza a preferência de cores
do sistema operacional ou navegador.

Essa preferência é identificada através da media query CSS:

@media (prefers-color-scheme: dark) {
    /* Estilos para o modo escuro */
}

Exemplo:

<div class="bg-white dark:bg-black">
    Conteúdo
</div>

Se o sistema estiver configurado para o modo escuro,
o elemento receberá fundo preto automaticamente.

Não é necessário utilizar JavaScript para detectar essa preferência.


============================================================
              CONTROLANDO O DARK MODE MANUALMENTE
============================================================

Também é possível controlar o modo escuro através de uma classe
CSS, permitindo que o usuário escolha o tema independentemente
da preferência do sistema.

Para isso, precisamos configurar a variante dark no CSS.

Exemplo:

@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

Agora, o Tailwind utilizará a presença da classe .dark para ativar
os estilos da variante dark:.

Exemplo em HTML:

<div class="dark">
    <div class="bg-white dark:bg-black dark:text-white">
        Conteúdo
    </div>
</div>

Quando a classe dark estiver presente em um elemento pai,
os estilos dark: dos elementos descendentes serão ativados.


============================================================
             CONTROLANDO O TEMA COM JAVASCRIPT
============================================================

Podemos utilizar JavaScript para adicionar ou remover a classe
.dark do elemento HTML.

Exemplo:

<button onclick="document.documentElement.classList.toggle('dark')">
    Alternar tema
</button>

O método toggle() adiciona a classe caso ela não exista
e remove caso ela já esteja presente.

Dessa forma, podemos implementar um botão para alternar
entre o modo claro e o modo escuro.


============================================================
              COMBINANDO CLASSES DARK E LIGHT
============================================================

Podemos combinar diferentes variantes para personalizar
praticamente qualquer propriedade CSS.

Exemplo:

<div class="
    bg-white
    text-black
    border-gray-300
    dark:bg-slate-950
    dark:text-white
    dark:border-slate-700
">
    Conteúdo
</div>

Também podemos utilizar dark: com outras variantes.

Exemplos:

- dark:hover:bg-gray-800
- dark:focus:border-blue-500
- dark:md:flex
- dark:opacity-50

Isso permite combinar o modo escuro com estados de interação
e breakpoints responsivos.
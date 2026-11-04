============================================================
             CUSTOM VARIABLES NO TAILWIND CSS
============================================================

O Tailwind CSS permite criar variáveis personalizadas (Custom Variables)
para definir valores reutilizáveis em diferentes partes do projeto.

Essas variáveis podem armazenar cores, espaçamentos, fontes, tamanhos,
entre outros valores.

Na versão Tailwind CSS v4, utilizamos a diretiva @theme para declarar
essas variáveis diretamente no arquivo CSS principal.


============================================================
                 CRIANDO CUSTOM VARIABLES
============================================================

Para criar uma variável personalizada, utilizamos a sintaxe:

@theme {
    --nome-da-variavel: valor;
}

Exemplo:

@import "tailwindcss";

@theme {
    --color-primary: #123456;
    --color-secondary: #654321;
    --font-primary: Arial, sans-serif;
    --spacing-custom: 150px;
}


============================================================
              UTILIZANDO CUSTOM VARIABLES
============================================================

As variáveis declaradas dentro de @theme podem gerar classes
utilitárias automaticamente.

Exemplos:

- bg-primary       → background-color: #123456
- text-primary     → color: #123456
- border-primary   → border-color: #123456
- font-primary     → font-family: Arial, sans-serif
- p-custom         → padding: 150px
- m-custom         → margin: 150px

Exemplo em HTML:

<div class="bg-primary text-white p-custom">
    Conteúdo personalizado
</div>


============================================================
                  ORGANIZANDO AS VARIÁVEIS
============================================================

É possível criar diferentes grupos de variáveis conforme sua finalidade.

Exemplo:

@theme {
    /* Cores */
    --color-primary: #123456;
    --color-secondary: #654321;
    --color-background: #f5f5f5;

    /* Fontes */
    --font-primary: Arial, sans-serif;
    --font-secondary: Georgia, serif;

    /* Espaçamentos */
    --spacing-custom: 150px;

    /* Bordas */
    --radius-custom: 15px;
}

As variáveis seguem convenções de nomenclatura do Tailwind.
O prefixo utilizado determina quais classes utilitárias serão geradas.


============================================================
               ACESSANDO VARIÁVEIS DIRETAMENTE
============================================================

Também podemos acessar uma variável CSS diretamente utilizando
a função var().

Exemplo:

<div class="bg-(--color-primary)">
    Conteúdo
</div>

Ou utilizando CSS convencional:

.element {
    background-color: var(--color-primary);
}


============================================================
                DIFERENÇA ENTRE @THEME E :ROOT
============================================================

Embora ambos permitam declarar variáveis CSS, possuem finalidades diferentes.

# -------------------------
@theme
# -------------------------

Declara variáveis que integram o sistema de design do Tailwind,
permitindo a geração automática de classes utilitárias.

Exemplo:

@theme {
    --color-primary: #123456;
}

Utilização:

<div class="bg-primary"></div>


# -------------------------
:root
# -------------------------

Declara variáveis CSS convencionais, disponíveis globalmente,
mas que não geram automaticamente classes utilitárias do Tailwind.

Exemplo:

:root {
    --my-color: #123456;
}

Utilização:

<div class="bg-(--my-color)"></div>


============================================================
              UTILIZANDO TEMAS PERSONALIZADOS
============================================================

Podemos utilizar variáveis CSS para implementar temas, como
modo claro e modo escuro.

Exemplo:

:root {
    --background: #ffffff;
    --foreground: #111111;
}

.dark {
    --background: #111111;
    --foreground: #ffffff;
}

Utilização:

<div class="bg-(--background) text-(--foreground)">
    Conteúdo
</div>

As classes continuam as mesmas, mas os valores das variáveis
são alterados conforme o tema ativo.
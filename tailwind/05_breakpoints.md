============================================================
               BREAKPOINTS NO TAILWIND CSS
============================================================

Breakpoints são pontos de interrupção que permitem modificar
o layout de uma aplicação conforme o tamanho da tela.

Eles são utilizados para criar layouts responsivos (Responsive Design),
adaptando os elementos para dispositivos móveis, tablets e desktops.

No Tailwind CSS, utilizamos prefixos como sm:, md:, lg: e xl:
para aplicar classes somente quando determinada largura de tela
for atingida.


============================================================
                  UTILIZANDO BREAKPOINTS
============================================================

A estrutura geral é:

# breakpoint:classe-tailwind

Exemplo:

<div class="flex flex-col md:flex-row">
    Conteúdo
</div>

- flex-col → elementos organizados em coluna.
- md:flex-row → a partir do breakpoint md, elementos organizados em linha.

Sem atingir o breakpoint, a classe padrão será utilizada.

Ao atingir o breakpoint, a classe correspondente será aplicada.


============================================================
                BREAKPOINTS PADRÃO DO TAILWIND
============================================================

O Tailwind CSS possui cinco breakpoints padrão.

# -------------------------
sm: (Small)
# -------------------------

Aplicado a partir de 640px.

Exemplo:

<div class="hidden sm:block">
    Conteúdo
</div>

# -------------------------
md: (Medium)
# -------------------------

Aplicado a partir de 768px.

Exemplo:

<div class="flex-col md:flex-row">
    Conteúdo
</div>

# -------------------------
lg: (Large)
# -------------------------

Aplicado a partir de 1024px.

Exemplo:

<div class="text-base lg:text-xl">
    Conteúdo
</div>

# -------------------------
xl: (Extra Large)
# -------------------------

Aplicado a partir de 1280px.

Exemplo:

<div class="w-full xl:w-1/2">
    Conteúdo
</div>

# -------------------------
2xl: (2x Extra Large)
# -------------------------

Aplicado a partir de 1536px.

Exemplo:

<div class="max-w-full 2xl:max-w-7xl">
    Conteúdo
</div>


============================================================
              BREAKPOINTS SÃO MOBILE FIRST
============================================================

O Tailwind utiliza a abordagem Mobile First.

Isso significa que as classes sem prefixos são aplicadas
a todos os tamanhos de tela, enquanto as classes com prefixos
são aplicadas a partir de determinada largura.

Exemplo:

<div class="text-sm md:text-lg lg:text-2xl">
    Conteúdo
</div>

- text-sm → padrão, para todas as telas.
- md:text-lg → a partir de 768px.
- lg:text-2xl → a partir de 1024px.

As classes dos breakpoints maiores substituem as propriedades
correspondentes definidas nos breakpoints anteriores.


============================================================
             UTILIZANDO MÚLTIPLOS BREAKPOINTS
============================================================

Podemos combinar diferentes breakpoints para adaptar
o mesmo elemento a vários tamanhos de tela.

Exemplo:

<div class="
    flex flex-col
    sm:flex-row
    md:justify-between
    lg:gap-10
    xl:px-20
">
    Conteúdo
</div>

- flex-col → coluna por padrão.
- sm:flex-row → linha a partir de 640px.
- md:justify-between → espaçamento entre elementos a partir de 768px.
- lg:gap-10 → espaçamento de 2.5rem a partir de 1024px.
- xl:px-20 → padding horizontal de 5rem a partir de 1280px.


============================================================
              UTILIZANDO BREAKPOINTS MAX
============================================================

Também podemos aplicar estilos até determinada largura,
utilizando o prefixo max-.

Exemplos:

- max-sm:hidden → oculto até 639px.
- max-md:flex-col → coluna até 767px.
- max-lg:text-sm → texto pequeno até 1023px.

Diferentemente dos prefixos tradicionais, max- aplica
estilos para larguras menores que o breakpoint indicado.


============================================================
               BREAKPOINTS PERSONALIZADOS
============================================================

É possível criar breakpoints personalizados utilizando
a diretiva @theme no arquivo CSS principal.

Exemplo:

@import "tailwindcss";

@theme {
    --breakpoint-tablet: 900px;
    --breakpoint-desktop: 1200px;
}

Agora podemos utilizar os novos prefixos:

<div class="flex flex-col tablet:flex-row desktop:gap-10">
    Conteúdo
</div>

- tablet: → a partir de 900px.
- desktop: → a partir de 1200px.


============================================================
              UTILIZANDO BREAKPOINTS COM DARK
============================================================

Também podemos combinar breakpoints com outras variantes,
como dark:, hover: e focus:.

Exemplos:

- md:dark:bg-black
- lg:hover:scale-110
- md:focus:border-blue-500
- dark:md:flex-row

Isso permite criar estilos responsivos que também consideram
o tema ativo e os estados de interação dos elementos.
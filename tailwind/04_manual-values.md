============================================================
              VALORES MANUAIS NO TAILWIND CSS
============================================================

O Tailwind CSS permite definir valores personalizados diretamente nas classes,
sem precisar criar regras CSS separadas.

Para isso, utilizamos colchetes [ ] após o nome da propriedade.

Exemplo:

<div class="m-[120120px]">
    Conteúdo
</div>

A classe m-[150px] define uma margem de 150px em todos os lados do elemento.


============================================================
                  SINTAXE DOS VALORES MANUAIS
============================================================

A estrutura geral é:

# propriedade-[valor]

Exemplos:

- m-[150px]          → margin: 150px
- p-[30px]           → padding: 30px
- w-[500px]          → width: 500px
- h-[200px]          → height: 200px
- text-[22px]        → font-size: 22px
- rounded-[15px]     → border-radius: 15px
- gap-[35px]         → gap: 35px


============================================================
                UTILIZANDO OUTRAS UNIDADES
============================================================

Os valores manuais permitem utilizar diferentes unidades CSS.

Exemplos:

- w-[50%]             → width: 50%
- h-[100vh]           → height: 100vh
- w-[20rem]           → width: 20rem
- m-[2em]             → margin: 2em
- text-[1.5rem]       → font-size: 1.5rem


============================================================
              UTILIZANDO VALORES CALCULADOS
============================================================

Também é possível utilizar funções CSS, como calc(), min(), max() e clamp().

Exemplos:

- w-[calc(100%-20px)] → width: calc(100% - 20px)
- w-[min(100%,500px)] → width: min(100%, 500px)
- text-[clamp(16px,2vw,24px)]
                      → font-size: clamp(16px, 2vw, 24px)

Observação: espaços dentro dos valores podem ser representados por _.
No caso de calc(), o Tailwind interpreta os espaços necessários
a partir dos underscores.


============================================================
             UTILIZANDO CORES PERSONALIZADAS
============================================================

É possível definir cores utilizando valores manuais.

Exemplos:

- bg-[#1a1a1a]        → background-color: #1a1a1a
- text-[#ff0000]      → color: #ff0000
- border-[#00ff00]    → border-color: #00ff00
- bg-[rgb(0,0,255)]   → background-color: rgb(0, 0, 255)


============================================================
              VALORES MANUAIS VS. PADRÃO
============================================================

O Tailwind já possui uma escala de valores predefinidos.

Exemplos:

- m-4       → margin: 1rem
- p-6       → padding: 1.5rem
- w-64      → width: 16rem

Entretanto, quando precisamos de um valor específico que não
corresponde à escala padrão, podemos utilizar os colchetes.

Exemplo:

<div class="m-4">
    Margem predefinida
</div>

<div class="m-[120120px]">
    Margem personalizada
</div>


============================================================
                 UTILIZANDO VARIÁVEIS CSS
============================================================

Também é possível utilizar variáveis CSS nos valores manuais.

Exemplo:

<div class="w-(--my-variable)">
    Conteúdo
</div>

No CSS:

:root {
    --container-width: 500px;
}

A classe utiliza o valor armazenado na variável CSS.


============================================================
                 VALORES ARBITRÁRIOS DE TIPO
============================================================

Em algumas situações, o Tailwind pode precisar identificar
explicitamente o tipo de valor utilizado.

Para isso, podemos utilizar a sintaxe:

# propriedade-[tipo:valor]

Exemplos:

- text-[length:20px]  → font-size: 20px
- text-[color:red]    → color: red

Essa sintaxe ajuda a distinguir valores quando uma propriedade
pode representar diferentes tipos de informação.
Por padrão o tailwind detecta qual o color-schema preferido do sistema operacional.
Caso seja escuro ele verifica se suas classes contém "dark:" e aplica elas.

Porém é possível ativar o modo manual adicionando este código no index.css:
# @custom-variant dark (&:is(.dark *));

Assim, ele irá aplicar as classes "dark:" apenas se o elemento pai/raiz tiver a classe "dark"
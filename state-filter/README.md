# Filtro de renderização

- Crie um sistema de filtragem ao qual será aplicado para renderizar dados da API `server.json`.

## Instruções

- O filtro será aplicado através de estados controlados por um formulário.
- O valores que serão aplicados nos estados precisam vir especificamente de elementos `input:radio`.
- Outro filtro presente será o de selecionar os usuários que possuem a propriedade `isActive` como 'true' de acordo com o filtro anterior através de um elemento `input:checkbox`.
- Se não for definido nenhum valor de filtro, então os dados não deve ser renderizados.

## Objetivos

- Crie um formulário que irá controlar estes estados.

  Aplique os seguintes filtros:

- Usuários que possuem como hooby: "Cooking".
- Usuários que possuem moram na cidade: "Mapleton".
- Usuários que possuem o código postal: "77890".
- Crie um filtro "adicional" dos filtros anteriores para selecionar os usuários que possuem a propriedade `isActive` como "true".

## Adicional

- Aplique os conceitos de `custom hooks` para tornar o código mais legível e organizado.

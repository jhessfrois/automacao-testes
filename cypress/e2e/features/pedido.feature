Feature: Fluxo de compra

Scenario: Realizar pedido com sucesso

Given que o usuário acessa o site
When acessa a página de produtos
And adiciona produto ao carrinho
Then o produto deve ser adicionado com sucesso
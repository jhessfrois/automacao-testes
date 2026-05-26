import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("que o usuário acessa o site", () => {
  cy.visit("https://automationexercise.com/")
})

When("acessa a página de produtos", () => {
  cy.contains("Products").click()
})

When("adiciona produto ao carrinho", () => {
  cy.contains("Add to cart").first().click()
})

Then("o produto deve ser adicionado com sucesso", () => {
  cy.contains("Added").should("exist")
})

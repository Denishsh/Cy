const email = "your_mail@gmail.com";
const pass = "hardPass";
const searchString = "Неведомая дичь";

it("Should successfully open new books", () => {
    cy.visit("/novie/");
    cy.contains("Новинки книг").should("be.visible");
  });

it("Neg. Search unknowned thing", () =>{
    cy.visit("/");
    cy.get('.Search-module__input').type(searchString);
    cy.get('.Search-module__button').click();
    cy.get('h1').contains("По запросу «" + searchString + "» ничего не найдено");
});

it("Login succussfully", () => {
  //cy.visit("/");
  cy.get(".Login-module__loginLink").click();
  cy.contains('Электронная почта').click();
  cy.get('.AuthorizationPopup-module__input').type(email);
  cy.contains('Продолжить').click();
  cy.get('.AuthorizationPopup-module__pass-eye').click();
  cy.get('.AuthorizationPopup-module__input').type(pass);
  cy.get('.childContainer-0-2-4').click();
  cy.get('.user_cash').should("be.visible");
});


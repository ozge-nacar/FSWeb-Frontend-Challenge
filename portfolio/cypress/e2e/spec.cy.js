describe("Proje Genel Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  describe("Header Testleri", () => {
    it("İsim görünmeli", () => {
      cy.contains("almila").should("be.visible");
    });

    it("Dil değiştirici çalışmalı", () => {
      cy.contains(/SWITCH TO ENGLISH|TÜRKÇE’YE GEÇ/).click({ force: true });
      cy.contains(/SWITCH TO ENGLISH|TÜRKÇE’YE GEÇ/).should("be.visible");
    });

    it("Dark mode toggle çalışmalı", () => {
      cy.get("[data-testid='darkMode-toggle']").click({ force: true });
      cy.get("div.dark").should("have.class", "dark");
    });

    it("Sosyal medya linkleri doğru URL'ye gitmeli", () => {
      cy.get('a[href*="github.com/ozge-nacar"]')
        .should("have.attr", "href")
        .and("include", "github.com");
      cy.get('a[href*="linkedin.com"]')
        .should("have.attr", "href")
        .and("include", "linkedin.com");
    });
  });
});

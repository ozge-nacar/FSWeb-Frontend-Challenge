describe("Kişisel Portföy Testleri", () => {
  context("Masaüstü Görünüm", () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
      cy.visit("http://localhost:5173");
    });

    it("Header masaüstü görünümde görünür olmalı", () => {
      cy.contains("almila").should("be.visible");
      cy.contains("I am a Frontend").should("exist");
    });

    it("Dil değiştirici çalışmalı", () => {
      cy.contains(/SWITCH TO ENGLISH|TÜRKÇE’YE GEÇ/).click({ force: true });
      cy.contains(/SWITCH TO ENGLISH|TÜRKÇE’YE GEÇ/).should("be.visible");
    });

    it("Dil değişimi sonrası Türkçe içerik görünür", () => {
      cy.contains("TÜRKÇE’YE GEÇ").click({ force: true });
      cy.contains("Ben bir Frontend").should("exist");
      cy.contains("Geliştiricisiyim").should("exist");
    });

    it("Dark mode toggle çalışmalı", () => {
      cy.get("[data-testid='darkMode-toggle']").click({ force: true });
      cy.get("div.dark").should("have.class", "dark");
    });

    it("Dark mode aktifken ikonlar değişiyor", () => {
      cy.get("[data-testid='darkMode-toggle']").click({ force: true });

      cy.get("a:contains('Github') img")
        .should("have.attr", "src")
        .and("include", "github-dark");

      cy.get("a:contains('Linkedin') img")
        .should("have.attr", "src")
        .and("include", "linkedin-dark");
    });

    it("GitHub linki doğru URL'ye sahip olmalı", () => {
      cy.get('a[href="https://github.com/ozge-nacar"]').should(
        "have.attr",
        "href",
        "https://github.com/ozge-nacar"
      );
    });

    it("LinkedIn linki doğru URL'ye sahip olmalı", () => {
      cy.get('a[href="https://linkedin.com"]').should(
        "have.attr",
        "href",
        "https://linkedin.com"
      );
    });
  });

  describe("Skills görünürlük testi", () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
      cy.visit("http://localhost:5173");

      cy.get("body").then(($body) => {
        if ($body.text().includes("TÜRKÇE’YE GEÇ")) {
          cy.contains("TÜRKÇE’YE GEÇ").click({ force: true });
        }
      });
    });

    it("Skills başlığı görünür olmalı", () => {
      cy.contains(/Skills|Yetenekler/).should("exist");
      cy.contains(/Skills|Yetenekler/).should("be.visible");
    });
  });

  describe("Profile Component Testleri", () => {
    it("Profil başlığı görünmeli", () => {
      cy.get("body").then(($body) => {
        if ($body.text().includes("SWITCH TO ENGLISH")) {
          cy.contains("TÜRKÇE’YE GEÇ").click({ force: true });
        }

        cy.visit("http://localhost:5173");
        cy.contains(/Profil|Profile/, { timeout: 10000 }).should("be.visible");
      });
    });

    it("Temel bilgiler sayfada görünmeli", () => {
      cy.visit("http://localhost:5173");
      cy.get("body", { timeout: 10000 }).should("not.be.empty");

      cy.contains("24.03.1996").should("be.visible");
      cy.contains("Ankara").should("be.visible");
      cy.contains("Hacettepe").should("be.visible");
    });

    it("Profil resmi görünür ve yüklenmiş olmalı", () => {
      cy.visit("http://localhost:5173");

      cy.get("body").then(($body) => {
        if ($body.text().includes("TÜRKÇE’YE GEÇ")) {
          cy.contains("TÜRKÇE’YE GEÇ").click({ force: true });
        }
      });

      cy.get("[data-testid='profile-img']", { timeout: 10000 })
        .scrollIntoView()
        .should("be.visible");
    });

    it("Projeler listeleniyor", () => {
      cy.visit("http://localhost:5173");

      cy.contains("h2", /Projeler|Projects/).should("be.visible");

      cy.contains("h2", /Projeler|Projects/)
        .parents("section")
        .within(() => {
          cy.get("h3").its("length").should("be.gte", 1);
        });
    });

    it("Projelerde linkler doğru çalışıyor", () => {
      cy.visit("http://localhost:5173");
      cy.get("a").filter("[href*='github.com']").should("have.length.gte", 1);
      cy.get("a")
        .filter("[href*='https://fs-web-frontend-challenge-ljjf.vercel.app/']")
        .should("have.length.gte", 1);
    });
  });

  describe("Contact Component Testleri", () => {
    it("İletişim başlığı ve açıklamalar görünür", () => {
      cy.visit("http://localhost:5173", { timeout: 10000 });
      cy.contains(/Bana mesaj gönder|Send me a message/, {
        timeout: 10000,
      }).should("be.visible");
    });

    it("Sosyal medya ikonları ve linkleri doğru şekilde görünmeli", () => {
      cy.visit("http://localhost:5173", { timeout: 10000 });
      cy.get("a[href*='twitter.com']", { timeout: 10000 })
        .should("have.attr", "href")
        .and("include", "twitter.com");
    });
  });
});

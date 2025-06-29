describe("Kişisel Portföy Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  describe("Header Testleri", () => {
    it("İsim ve diğer içerikler görünmeli", () => {
      cy.contains("almila").should("be.visible");
      cy.contains("I am a Frontend").should("exist");
      cy.contains("Developer...").should("exist");
      cy.contains("craft solid and scalable frontend").should("exist");
      cy.contains("user experiences").should("exist");
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
      cy.get("input[type='checkbox']").click({ force: true });

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

  describe("Skills Component Testleri", () => {
    it("Yetenekler başlığı görünüyor", () => {
      cy.contains(/Yetenekler|Skills/).should("be.visible");
    });

    it("Tüm yetenekler listeleniyor", () => {
      cy.contains(/javascript/i).should("be.visible");
      cy.contains(/react/i).should("be.visible");
      cy.contains(/redux/i).should("be.visible");
    });
  });

  describe("Profile Component Testleri", () => {
    it("Profil başlığı görünmeli", () => {
      cy.contains(/Profil|Profile/).should("be.visible");
    });

    it("Temel bilgiler sayfada görünmeli", () => {
      cy.contains(/Doğum Tarihi|Date of Birth/).should("be.visible");
      cy.contains(/Ankara/).should("be.visible");
      cy.contains(/Hacettepe/).should("be.visible");
    });

    it("Hakkımda metinleri görünür olmalı", () => {
      cy.contains("h2", /Profil|Profile/)
        .parents("section")
        .within(() => {
          cy.get("p").should("have.length.gte", 1);
        });
    });

    it("Profil resmi yükleniyor", () => {
      cy.get("img[alt='Profile']")
        .should("be.visible")
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });

    describe("Projects Component Testleri", () => {
      it("Projeler başlığı görünür", () => {
        cy.contains(/Projeler|Projects/).should("be.visible");
      });
    });

    it("Projeler listeleniyor", () => {
      cy.contains("h2", /Projeler|Projects/)
        .parents("section")
        .within(() => {
          cy.get("h3").should("have.length.gte", 1);
        });
    });

    it("Projelerde linkler doğru çalışıyor", () => {
      cy.get("a").filter("[href*='github.com']").should("have.length.gte", 1);
      cy.get("a")
        .filter("[href*='fs-web-frontend-challenge-57xn.vercel.app/']")
        .should("have.length.gte", 1);
    });
  });

  describe("Contact Component Testleri", () => {
    it("İletişim başlığı ve açıklamalar görünür", () => {
      cy.contains(/Bana mesaj gönder|Send me a message/).should("be.visible");
    });

    it("Sosyal medya ikonları ve linkleri doğru şekilde görünmeli", () => {
      cy.get("a[href*='twitter.com']")
        .should("have.attr", "href")
        .and("include", "twitter.com");
      cy.get("a[href*='codepen.io']")
        .should("have.attr", "href")
        .and("include", "codepen.io");
      cy.get("a[href*='instagram.com']")
        .should("have.attr", "href")
        .and("include", "instagram.com");
      cy.get("img[alt*='icon']").should("have.length.gte", 3);
    });
  });
});

const Portfolio = require("./_includes/components/portfolio");

class Index {
  data () {
    return {
      layout: "layout/base",
      porfolioComponent: new Portfolio()
    }
  }

  render ({porfolioComponent}) {
    return `
<main class="container">
  <section>
    <h1 class="title">
      Jens Kooij
    </h1>
    <h2 class="subtitle">
      Software ontwikkelaar sinds 2009
    </h2>
  </section>
  <section class="portfolio">
    ${porfolioComponent.render()}
  </section>
</main>
    `.trim();

  }
}

module.exports = Index;
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
<div class="columns">
  <aside class="column is-one-fifth   ">
    <nav class="has-text-centered p-6 is-sticky">
      <h1 class="title has-text-primary" style="font-size:3vw;">
           Jens<br />
           Kooij 
      </h1>
      <a class="" href="/">Home</a>  
    </nav>
  </aside>
  <main class="column container p-6">
    <section>
      <h2 class="subtitle is-size-2 mb-6">
        Werkervaring
      </h2>
    </section>
    <section class="portfolio">
      ${porfolioComponent.render()}
    </section>
  </main>
</div>

    `.trim();

  }
}

module.exports = Index;
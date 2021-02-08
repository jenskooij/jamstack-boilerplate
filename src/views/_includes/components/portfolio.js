const Image = require("@11ty/eleventy-img");

class Portfolio {

  portfolioData;

  imageOptions = {
    widths: [300],
    formats: ["webp"],
    outputDir: "./dist/site/img/portfolio/",
    urlPath: "/img/portfolio/"
  }

  constructor () {
    this.data();
  }

  /**
   * Aggregates data
   */
  data () {
    if (Portfolio.prototype.dataInitialized) {
      return;
    }
    const data = require('../../_data/portfolio');
    this.portfolioData = {};

    data.forEach(item => {
      if (!this.portfolioData[item.year]) {
        this.portfolioData[item.year] = [];
      }
      if (item.image) {
        let source = item.image;

        let stats = Image(source, this.imageOptions).then(result => {
          console.info("Got Image for ", item.title);
          item.imageHtml = Image.generateHTML(result, {
            alt: item.title,
            loading: "lazy",
            decoding: "async",
          });
          this.portfolioData[item.year].push(item);
        }).catch(err => {
          this.portfolioData[item.year].push(item);
          console.error(`Unable to fetch ${item.image} ${err}`);
        });

        /*let metadata = Image.statsSync(source, this.imageOptions);
        item.imageHtml = Image.generateHTML(metadata, {
          alt: item.title,
          loading: "lazy",
          decoding: "async",
        });*/
      } else {
        console.info(`No image for ${item.title}`);
        this.portfolioData[item.year].push(item);
      }

    });
    Portfolio.prototype.dataInitialized = true;
  }

  /**
   * Renders the portfolio into html
   * @returns {string}
   */
  render () {
    let jsLogic;
    console.info("Rendering portfolio");
    if (!Portfolio.prototype.jsLogicPrinted) {
      jsLogic = `
      <script>
        window.addEventListener("DOMContentLoaded", () => {
          const items = document.querySelectorAll('.portfolio-item'),
          portfolioModal = document.getElementById('portfolioModal'),
          portfolioModalContent = portfolioModal.querySelector('.modal-content');
          
          const clickPortfolioItem = (e) => {
            portfolioModal.classList.add('is-active');
            console.log(e.currentTarget);
            portfolioModalContent.innerHTML = '';
            portfolioModalContent.appendChild(e.currentTarget.cloneNode(true));
            portfolioModalContent.querySelectorAll('.is-hidden').forEach(el => el.classList.remove('is-hidden'));
            portfolioModalContent.querySelectorAll('.is-hidden-mobile').forEach(el => el.classList.remove('is-hidden-mobile'));
          };
          
          const closePortfolioModal = () => {
            portfolioModal.classList.remove('is-active');
          };
          
          document.body.appendChild(portfolioModal);
          portfolioModal.querySelector('.modal-close').addEventListener('click', closePortfolioModal);
          portfolioModal.querySelector('.modal-background').addEventListener('click', closePortfolioModal);
          window.addEventListener('keydown', e => {e.key.toLowerCase() === 'escape' ? closePortfolioModal() : null;})
            
            items.forEach(el => {
              el.addEventListener('click', clickPortfolioItem, false);
            });
        });
      </script>
      <div class="modal" id="portfolioModal">
        <div class="modal-background"></div>
        <div class="modal-content"></div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      `;
    }
    Portfolio.prototype.jsLogicPrinted = true;

    return `
    <div class="portfolio-component">
      ${Object.entries(this.portfolioData).reverse().map(([year, items]) => `
        <p class="subtitle">${year}</p>
        <div class="columns is-mobile">
           ${items.map(item => `
           <div class="column is-one-third">
              <div class="box portfolio-item">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      ${item.imageHtml || ""}
                    </p>
                  </figure>
                  <div class="media-content is-hidden-mobile">
                    <div class="content">
                      <h3>${item.title}</h3>
                      <p class="is-hidden is-size-5">${item.description}</p>
                      <small class="small is-hidden">${item.keywords.join(', ')}</small>
                    </div>
                  </div>
                </article>
              </div>
            </div>
           `.trim()).join('')}
        </div>
        
      `.trim()).join('')}
    </div>
    ${jsLogic || ""}
    `;
  }
}

Portfolio.prototype.dataInitialized = false;
Portfolio.prototype.jsLogicPrinted = false;

module.exports = Portfolio;
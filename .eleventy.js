const htmlmin = require("html-minifier"),
  markdownIt = require("markdown-it"),
  Image = require("@11ty/eleventy-img");

async function images (src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300],
    formats: ["webp"],
    outputDir: "./dist/site/img/portfolio/",
    urlPath: "/img/portfolio/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  const md = new markdownIt({
    html: true
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addAsyncShortcode("image", images);

  eleventyConfig.dir = {
    input: "src/views",
    output: "dist/site"
  };

  return eleventyConfig;
};
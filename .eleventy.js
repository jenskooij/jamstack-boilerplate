const htmlmin = require("html-minifier"),
  markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "njk",
    "md"
  ]);

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }

    return content;
  });

  const md = new markdownIt({
    html: true
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.dir = {
    input: "src/views",
    output: "dist/site"
  };

  return eleventyConfig;
};
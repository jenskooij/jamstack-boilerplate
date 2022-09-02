const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  /**
   * The file extensions Eleventy should pick-up and render
   */
  eleventyConfig.setTemplateFormats([
    "njk",
    "md"
  ]);

  /**
   * Everyting that gets rendered as .html file, will get html minified
   */
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

  /**
   * Copy assets to dist root
   */
  eleventyConfig.addPassthroughCopy({ "src/assets": "../site/" });

  /**
   * Set Eleventy input and output dirs
   * @type {{output: string, input: string}}
   */
  eleventyConfig.dir = {
    input: "src/views",
    output: "dist/site"
  };

  return eleventyConfig;
};
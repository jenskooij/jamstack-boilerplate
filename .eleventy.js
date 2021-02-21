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

  var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  // Copy assets to root
  eleventyConfig.addPassthroughCopy({ "src/assets": "../site/" });

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    var aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']); // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };

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
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const md = require('markdown-it')();
const dumpFilter = require("@jamshop/eleventy-filter-dump");

module.exports = function(eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addFilter("md", string => md.render(string));
  eleventyConfig.addFilter("cudzyslowy", require("./utils/cudzyslowy.js") );
  eleventyConfig.addFilter("sierotki", require("./utils/sierotki.js") );
  eleventyConfig.addFilter("polskadata", require("./utils/polska-data.js") );
  eleventyConfig.addFilter("dump", dumpFilter);

  return  {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};

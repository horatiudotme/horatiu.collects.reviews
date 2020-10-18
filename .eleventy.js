const filters = require('./_eleventy/filters');
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

  // Add filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  eleventyConfig.addPassthroughCopy('src/assets/css/main.css');

  // Add support for YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // Markdown options
  // let markdownIt = require("markdown-it");
  // let markdownItAttrs = require("markdown-it-attrs");
  // let options = {
  //   html: true
  // };
  // let markdownLib = markdownIt(options).use(markdownItAttrs);
  // eleventyConfig.setLibrary("md", markdownLib);  

  return {
    dir: {
      input: "src",
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
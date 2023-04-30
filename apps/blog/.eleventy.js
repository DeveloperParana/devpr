const { EleventyRenderPlugin } = require('@11ty/eleventy');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const eleventySass = require('eleventy-sass');

const BASE_URL = '/devpr';

module.exports = function (config) {

  config.addPassthroughCopy({ public: './' });

  config.addGlobalData('baseUrl', BASE_URL);

  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(pluginRss);
  config.addPlugin(eleventySass);

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  });

  config.addFilter(
    'absoluteUrl',
    function (url, base = config.globalData.baseUrl) {
      try {
        return base + url;
      } catch (err) {
        console.error(err);
        return url;
      }
    }
  );

  return {
    templateFormats: ['md', 'njk', 'jpg', 'png', 'gif', 'svg', 'webp'],
    dir: {
      input: 'src',
      output: '_site',
      layouts: '_js/layouts',
    },
  };
};

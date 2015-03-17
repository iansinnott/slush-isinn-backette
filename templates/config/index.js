/**
 * Global App configuration.
 */

module.exports = {

  // Siply mirrors the version specified in package.json
  version: require('../package.json').version,

  paths: {
    js: 'client/**/*.js',                // All JS files
    jsMain: 'client/index.js',           // App entry point
    styl: 'client/components/**/*.styl', // All stylus files
    stylMain: 'client/lib/*.styl',  // Main stylus files
    templates: 'client/**/*.jade', // Client-side templates
    dest: 'public/'                      // Output dest for js & css
  }

};

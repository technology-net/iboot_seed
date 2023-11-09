const mix = require('laravel-mix');
const glob = require('glob');
const path = require('path');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  processCssUrls: false,
  clearConsole: true,
  terser: {
    extractComments: false,
  }
})

// Run all webpack.mix.js in app
glob.sync(path.resolve(__dirname) + '/vendor/iboot/**/webpack.mix.js').forEach(item => require(item))
glob.sync(path.resolve(__dirname) + '/packages/**/webpack.mix.js').forEach(item => require(item))

'use strict';

var Marionette = require('../../lib/marionette');

module.exports = Marionette.LayoutView.extend({

  template: require('./MainArea.jade'),

  regions: {
    main: '.main-area',
    sidebar: '.sidebar'
  }

});

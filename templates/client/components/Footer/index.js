'use strict';

var Marionette = require('../../lib/marionette');

module.exports = Marionette.ItemView.extend({
  template: require('./Footer.jade'),

  initialize: function() {
    var _this = this;

    app.vent.on('navigate', function(pathname) {
      _this.$('.active').removeClass('active');
      _this.$('[href="' + pathname + '"]').addClass('active');
    });
  },

  /**
   * TODO: The link logic that's going on here is duplicated in Header
   */
  onRender: function() {
    this.$('.link').on('click', function(e) {
      e.preventDefault();
      app.navigate(this.pathname);
      app.vent.trigger('navigate', this.pathname);
    });
  }
});


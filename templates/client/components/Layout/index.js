'use strict';

var Marionette = require('../../lib/marionette');

var Header     = require('../Header'),
    Footer     = require('../Footer'),
    MainArea   = require('../MainArea'),
    AboutPage  = require('../AboutPage'),
    MemberList = require('../Members').List;

var Layout = Marionette.LayoutView.extend({

  template: require('./Layout.jade'),

  className: 'app',

  regions: {
    header: '.header',
    main: '.main',
    footer: '.footer'
  },

  initialize: function() {
    var _this = this;

    app.vent.on('navigate', function(pathname) {
      switch (pathname) {
        case '/about':
          _this.showAbout();
          break;
        case '/members':
          _this.showMemberList();
          break;

        default:
          _this.showHome();
      }
    });
  },

  onRender: function() {
    var header = new Header(),
        footer = new Footer();

    this.header.show(header);
    this.footer.show(footer);
  },

  showHome: function() {
    this.main.show(new MainArea());
  },

  showAbout: function() {
    this.main.show(new AboutPage());
  },

  showMemberList: function() {

    // TDOO: This needs to be passed a collection
    this.main.show(new MemberList({ collection: app.members }));
  }

});

module.exports = Layout;

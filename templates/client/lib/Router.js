'use strict';

var Marionette = require('./marionette');

module.exports = Marionette.AppRouter.extend({
  appRoutes: {
    'about': 'showAbout',
    'members': 'showMemberList',
    '*defaults': 'showHome'
  },

  initialize: function() {
    this.on('route', function(route) {
      console.log('now routing to %s!', route);
    });
  }
});


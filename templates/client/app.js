'use strict';

var Backbone = require('backbone'),
    debug    = require('debug')('app:init'),
    $        = require('jquery');

Backbone.$ = $;

var Marionette = require('backbone.marionette');

var App = new Marionette.Application();

var Layout = require('./components/Layout'),
    Router = require('./lib/Router'),
    MemberCollection = require('./collections/Members');

// TODO: temporary
// A temporary collection of 'members' with which to instantiate our app
var FIXTURES = [
  { name: 'Ray', age: 33 },
  { name: 'Sterling', age: 31 },
  { name: 'Lana', age: 34 }
];

App.addRegions({ body: 'body' });

App.navigate = function(pathname) {
  return Backbone.history.navigate(pathname);
};

App.on('start', function() {
  debug('App starting up. Initializing app layout');

  // Expose the app & jquery globally. There may be a better way to do this, but
  // since requiring BB or marionette requires more setup than a simple require
  // statement I prefer this solution.
  window.app = App;
  window.Backbone = Backbone;
  window.Marionette = Marionette;
  window.$ = $;

  app.members = new MemberCollection(FIXTURES);

  var appLayout = new Layout();

  // TODO: When should I render the layout to th page?
  app.body.show(appLayout);

  app.router = new Router({ controller: appLayout });

  Backbone.history.start({ pushState: true });
});

module.exports = App;

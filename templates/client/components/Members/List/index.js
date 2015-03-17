'use strict';

var Marionette = require('../../../lib/marionette');

var ListItem = Marionette.ItemView.extend({
  tagName: 'li',
  template: require('./ListItem.jade')
});

module.exports = Marionette.CompositeView.extend({
  template: require('./List.jade'),
  childView: ListItem,
  childViewContainer: 'ul.members'
});

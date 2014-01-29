var App = App || {};
App.Model = App.Model || {};
App.View = App.View || {};

App.View.MenuBar = Backbone.View.extend({

  el: '#menuBar',

  events: {
  },

  initialize: function() {
    // cache the jquery object
    this.$el = $(this.el);

    // compile the template
    // TODO cache compiled templates in App.Template.Compiled.* ???
    this.template = Handlebars.compile(App.Template.MenuBar);
  },

  render: function() {
    this.$el.append(this.template());
  }

});


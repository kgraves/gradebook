var App = App || {};
App.Model = App.Model || {};
App.View = App.View || {};

App.View.ContentGrid = Backbone.View.extend({

  el: '#contentGrid',

  events: {
  },

  initialize: function() {
    // cache the jquery object
    this.$el = $(this.el);

    // compile the template
    // TODO cache compiled templates in App.Template.Compiled.* ???
    this.template = Handlebars.compile(App.Template.ContentGrid);
  },

  render: function() {
    this.$el.append(this.template());
  }

});


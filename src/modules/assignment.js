var App = App || {};
App.Model = App.Model || {};
App.Collection = App.Collection || {};

App.Model.Assignment = Backbone.Model.extend({
    defaults: {
        name: "assignment 1",
        description: "the first class assignment",
        points: 10
    },
    initialize: function() {
        console.log("Assignment: init");
    },
    fetch: function () {

    },
    save: function () {

    },
    destroy: function () {

    },
});

App.Collection.Assignments = Backbone.Collection.extend({
    model: App.Model.Assignment
});

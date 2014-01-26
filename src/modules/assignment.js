App = App || {};

Assignment = Backbone.Model.extend({
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

Assignments = Backbone.Collection.extend({
    model: Assignment
});


Assignment = Backbone.Model.extend({
    defaults: {
        name: "assignment 1",
        description: "the first class assignment",
        points: 10
    },
    initialize: function() {
        console.log("Assignment: init");
    }
});

Assignments = Backbone.Collection.extend({
    model: Assignment
});

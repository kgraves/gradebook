
Assignment = Backbone.Model.extend({
    initialize: function() {
        console.log("Assignment: init");
    }
});

Assignments = Backbone.Collection.extend({
    model: Assignment
});

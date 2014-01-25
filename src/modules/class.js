
Class = Backbone.Model.extend({
    initialize: function() {
        console.log("Class: init");
        var students = new Students();
        var assignments = new Assignments();
        console.log(students);
        console.log(assignments);
    }

});


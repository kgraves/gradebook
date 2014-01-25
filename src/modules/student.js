
Student = Backbone.Model.extend({
    initialize: function() {
        console.log("Student: init");
    }
});

Students = Backbone.Collection.extend({
    model: Student
});

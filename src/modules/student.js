
Student = Backbone.Model.extend({
    defaults: {
        name: "jane fonda",
        student_id: "12345",
        grades: []
    },
    initialize: function() {
        console.log("Student: init");
    }
});

Students = Backbone.Collection.extend({
    model: Student
});

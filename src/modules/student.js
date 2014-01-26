
Student = Backbone.Model.extend({
    defaults: {
        name: "jane fonda",
        student_id: "12345",
        grades: []
    },
    initialize: function() {
        console.log("Student: init");
    },
    fetch: function () {

    },
    save: function () {

    },
    destroy: function () {

    },
});

Students = Backbone.Collection.extend({
    model: Student
});

var App = App || {};
App.Model = App.Model || {};
App.Collection = App.Collection || {};

App.Model.Student = Backbone.Model.extend({
    defaults: {
        name: "jane fonda",
        student_id: "12345",
        grades: []
    },
    initialize: function() {
        console.log("Student: init");
    }
});

App.Collection.Students = Backbone.Collection.extend({
    model: App.Model.Student
});

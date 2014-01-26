
Class = Backbone.Model.extend({
    initialize: function() {
        console.log("Class: init");
        var students = new Students();
        var assignments = new Assignments();

        var ass1 = new Assignment({ name: "assignment 1", description: "first assignment", points: 10 });
        var ass2 = new Assignment({ name: "assignment 2", description: "second assignment", points: 20 });
        var ass3 = new Assignment({ name: "assignment 3", description: "third assignment", points: 30 });
        assignments.set([ass1, ass2, ass3]);

        var stud1 = new Student({ name: "jane fonda", student_id: "123", grades: [9, 19, 29] });
        var stud2 = new Student({ name: "nick cage", student_id: "456", grades: [8, 18, 28] });
        var stud3 = new Student({ name: "bruce willis", student_id: "789", grades: [10, 20, 30] });
        students.set([stud1, stud2, stud3]);

        console.log(students);
        console.log(assignments);
    }

});


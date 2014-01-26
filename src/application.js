var App = App || {};
App.Model = App.Model || {};

(function($){
    // create global App namespace

    /*
    var klass = new App.Model.Class();

    klass.get("assignments").push([
    { name: "assignment 1", description: "first assignment", points: 10 },
    { name: "assignment 2", description: "second assignment", points: 20 },
    { name: "assignment 3", description: "third assignment", points: 30 }
    ]);

    klass.get("students").push([
    { name: "jane fonda", student_id: "123", grades: [9, 19, 29] },
    { name: "nick cage", student_id: "456", grades: [8, 18, 28] },
    { name: "bruce willis", student_id: "789", grades: [10, 20, 30] }
    ]);

    klass.save();

    // gets everything from storage
    chrome.storage.local.get(null, function (classes) {
        console.log(classes);
    });
    */

    klass = new App.Model.Class({cid: "c1"});
    console.log(klass.fetch());


})(jQuery);

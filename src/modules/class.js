var App = App || {};
App.Model = App.Model || {};
App.Collection = App.Collection || {};

App.Model.Class = Backbone.Model.extend({
    defaults: {
        name: "",
        description: "",
        students: new App.Collection.Students(),
        assignments: new App.Collection.Assignments()
    },
    initialize: function() {
        console.log("Class: init");
    },
    fetch: function () {
        var id = this.cid;
        var klass = this;
        chrome.storage.local.get(id, function (instance) {
            console.log("Class: fetch");
            klass.set(JSON.parse(instance[id]));
        });
        return klass;
    },
    save: function () {
        var klass = {};
        klass[this.cid] = JSON.stringify(this);
        chrome.storage.local.set(klass, function () {
            console.log("Class: save");
        });
        return this;
    },
    destroy: function () {
        var id = this.cid;
        chrome.storage.local.remove(id, function () {
            console.log("Class: destroy");
        });
    },
});

App.Collection.Classes = Backbone.Collection.extend({
    model: App.Model.Class
});

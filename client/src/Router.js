var Parmesano = Parmesano || {};

Parmesano.Router = Backbone.Router.extend({

    _dependencies_: [
        'titleBarView',
        'lateralBarView',
        'activityInventoryView',
        'todoTodayView'
    ],

    routes: {
        "": "initApp",
        "activityInventory": "loadActivityInventoryView",
        "todoToday": "loadTodoTodayView"
    },

    initApp: function() {
        this.titleBarView.render();
        this.lateralBarView.render();
        this.activityInventoryView.render();
    },

    loadActivityInventoryView: function() {
        this.activityInventoryView.render();
    },

    loadTodoTodayView: function() {
        this.todoTodayView.render();
    }

});
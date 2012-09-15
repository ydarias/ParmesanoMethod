var Parmesano = Parmesano || {};

Parmesano.Router = Backbone.Router.extend({

    _dependencies_: ['titleBarView', 'lateralBarView', 'activityInventoryView'],

    routes: {
        "": "initApp"
    },

    initApp: function() {
        this.titleBarView.render();
        this.lateralBarView.render();
        this.activityInventoryView.render();
    }
});
var Parmesano = Parmesano || {};

Parmesano.Router = Backbone.Router.extend({

    _dependencies_: ['titleBarView'],

    routes: {
        "": "initApp"
    },

    initApp: function() {
        this.titleBarView.render();
    }
});
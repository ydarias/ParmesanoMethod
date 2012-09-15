var Parmesano = Parmesano || {};

Parmesano.TitleBarView = Backbone.View.extend({
    
    render: function() {
        console.log("Rendering title bar view ...");
        
        var html = Parmesano.HTML('#titleBarTemplate', {});
        this.$el.html(html);
    }
    
});

Parmesano.LateralBarView = Backbone.View.extend({

    render: function() {
        console.log("Rendering lateral bar view ...");

        var html = Parmesano.HTML('#lateralBarTemplate', {});
        this.$el.html(html);
    }

});

Parmesano.ActivityInventoryView = Backbone.View.extend({

    _dependencies_: ['tasks'],

    render: function() {
        console.log("Rendering activity inventory view ...");

        var context = {
            tasks: this.tasks.toJSON()
        };
        var html = Parmesano.HTML('#activityInventoryTemplate', context);
        this.$el.html(html);
    }

});
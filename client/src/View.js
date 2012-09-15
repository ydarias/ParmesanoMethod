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


$(function() {
    var injection = new Injection();

    injection.register("tasks", Parmesano.Tasks);

    injection.register("titleBarView", Parmesano.TitleBarView, {el : '#titleBarAttachmentPoint'});
    injection.register("lateralBarView", Parmesano.LateralBarView, {el : '#lateralBarAttachmentPoint'});
    injection.register("activityInventoryView", Parmesano.ActivityInventoryView, {el : '#workbenchAttachmentPoint'});

    Parmesano.router = injection.register("router", Parmesano.Router);

    Backbone.history.start();
});
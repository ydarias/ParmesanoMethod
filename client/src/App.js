$(function() {
    var injection = new Injection();

    injection.register("titleBarView", Parmesano.TitleBarView, {el : '#titleBarAttachmentPoint'});

    Parmesano.router = injection.register("router", Parmesano.Router);

    Backbone.history.start();
});
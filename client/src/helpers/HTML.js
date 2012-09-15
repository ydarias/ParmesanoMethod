var Parmesano = Parmesano || {};

Parmesano.HTML = function(templateName, context) {
    var source = $(templateName).html();
    var template = Handlebars.compile(source);

    return template(context);
};
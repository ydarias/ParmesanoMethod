!function() {
    var resources = {
        dev: {
            translation: {
                "app": {
                    "name": "The Parmesano Method"
                }
            }
        },

        es: {
            translation: {
                "app": {
                    "name": "The Parmesano Method"
                }
            }
        }
    };

    $.i18n.init({
        lng: 'en',
        resStore: resources,
        debug: true
    }, function() {
        // Translate preloaded HTML (do not use this space for dynamic content)
    });
}();
!function() {
    var resources = {
        dev: {
            translation: {
                "app": {
                    "name": "The Parmesano Method"
                },
                "label": {
                    "menu": "Menu",
                    "activityInventory": "Activity Inventory",
                    "todoToday": "ToDo today",
                    "timer": "Timer"
                }
            }
        },

        es: {
            translation: {
                "app": {
                    "name": "The Parmesano Method"
                },
                "label": {
                    "menu": "Menú",
                    "activityInventory": "Inventario de actividad",
                    "todoToday": "Tareas para hoy",
                    "timer": "Reloj"
                }
            }
        }
    };

    $.i18n.init({
        resStore: resources,
        debug: true
    }, function() {
        // Translate preloaded HTML (do not use this space for dynamic content)
    });
}();
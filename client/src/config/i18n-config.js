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
                    "timer": "Timer",
                    "description": "Description",
                    "duration": "Duration",
                    "newTask": "New Task",
                    "save": "Save",
                    "cancel": "Cancel",
                    "selectTasks": "Select Tasks"
                },
                "help": {
                    "typeDescription": "Task description ..."
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
                    "timer": "Reloj",
                    "description": "Descripción",
                    "duration": "Duración",
                    "newTask": "Nueva tarea",
                    "save": "Guardar",
                    "cancel": "Cancelar",
                    "selectTasks": "Seleccionar tareas"
                },
                "help": {
                    "typeDescription": "Descripción de la tarea ..."
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
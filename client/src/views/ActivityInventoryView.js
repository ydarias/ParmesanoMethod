var Parmesano = Parmesano || {};

Parmesano.ActivityInventoryView = Backbone.View.extend({

    _dependencies_: ['tasks'],

    events: {
        'click #newTask-button': "displayNewTaskForm",
        'click #cancelNewTask-button': "hideNewTaskForm",
        'click #lessDuration-button': "reduceTaskDuration",
        'click #moreDuration-button': "addTaskDuration",
        'click #submitNewTask-button': "storeNewTask"
    },

    render: function() {
        console.log("Rendering activity inventory view ...");

        var context = {
            tasks: this.tasks.toJSON()
        };
        var html = Parmesano.HTML('#activityInventoryTemplate', context);
        this.$el.html(html);
    },

    displayNewTaskForm: function() {
        console.log("Showing new task form ...");

        $('#newTask-button').hide(function() {
            $('#newTask-form').show("slow");
        });
    },

    hideNewTaskForm: function() {
        console.log("Hiding new task form ...");

        $('#newTask-form').hide("slow", function() {
            $('#descriptionInput').val('');
            $('#durationInput').val(1);
            $('#newTask-button').show();
        });
    },

    reduceTaskDuration: function() {
        console.log("Reducing new task duration ...");

        var currentDuration = parseInt($('#durationInput').val(), 10);
        if (currentDuration > 1)
            $('#durationInput').val(currentDuration - 1);
    },

    addTaskDuration: function() {
        console.log("Adding new task duration ...");

        var currentDuration = parseInt($('#durationInput').val(), 10);
        if (currentDuration < 6)
            $('#durationInput').val(currentDuration + 1);
    },

    storeNewTask: function() {
        console.log("Storing new task ...");

        var description = $('#descriptionInput').val();
        var duration = parseInt($('#durationInput').val(), 10);

        this.tasks.add({description: description, duration: duration});

        this.render();
    }

});
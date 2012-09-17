var Parmesano = Parmesano || {};

Parmesano.TodoTodayView = Parmesano.TaskView.extend({

    _dependencies_ : ['tasks', 'todayTasks'],

    events: {
        'click #selectTasks-button': "displaySelectTasksForm",
        'click #cancelSelectTasks-button': "hideSelectTasksForm",
        'click #submitSelectTasks-button': "storeTodayTasks"
    },

    render: function() {
        console.log("Rendering todo today view ...");

        var context = {
            tasks: this.tasks.map(this._mapTask),
            todayTasks: this.todayTasks.map(this._mapTask)
        };
        var html = Parmesano.HTML('#todoTodayTemplate', context);
        this.$el.html(html);
    },

    displaySelectTasksForm: function() {
        console.log("Showing select tasks form ...");

        $('#action-buttons').hide(function() {
            $('#selectTasks-form').show("slow");
        });
    },

    hideSelectTasksForm: function() {
        console.log("Hiding select tasks form ...");

        $('#selectTasks-form').hide("slow", function() {
            $('#action-buttons').show();
        });
    },

    storeTodayTasks: function() {
        console.log("Storing selected tasks ...");

        var self = this;
        $('#selectedTasks input:checked').each(function() {
            var id = $(this).attr('id');
            self.todayTasks.add(self.tasks.getByCid(id));

        });
        
        this.render();
    }

});
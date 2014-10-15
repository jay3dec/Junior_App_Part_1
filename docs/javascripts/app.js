var HomeTemplate = [
  // Put in a div with class content.  Ratchet will style this appropriately.
  '<nav class="bar bar-standard">',
  '<header class="bar bar-nav">',
 
  '<button id="btnAddTask" class="btn pull-right">Add Task</button>',
  '<h1 class="title">ToDo List Junior App</h1>',
  '</header>',
  '</nav>',
 
  '<div class="bar bar-standard bar-header-secondary">',
  ' <ul class="table-view">',
  ' <li class="table-view-cell">Item 1</li>',
  ' <li class="table-view-cell table-view-cell">Item 2</li>',
  ' <li class="table-view-cell">Item 3</li>',
  ' </ul>',
  '</div>'
  // Join the array with a new-line for a quick and easy html template.
].join('\n');

var AddTaskTemplate = [
  
  '<nav class="bar bar-standard">',
  '<header class="bar bar-nav">',
 
  '<button id="btnBack" class="btn btn-link btn-nav pull-left">Back</button>',
  '<h1 class="title">Add Task</h1>',
  '</header>',
  '</nav>',
  
  '<div class="bar bar-standard bar-header-secondary">',
  '<form>',
  '<input type="text" placeholder="Full name">',
  '<input type="search" placeholder="Search">',
  '<textarea rows="3"></textarea>',
  '<button class="btn btn-positive btn-block">Save Task</button>',
  '</form>',
  '</div>'
 
].join('\n');

var HomeView = Jr.View.extend({

  render: function(){
    this.$el.html(HomeTemplate);  
    return this;
  },
  events: {
    'click #btnAddTask': 'onClickAddTask'
  },
  onClickAddTask: function() {

    Jr.Navigator.navigate('addTask',{
      trigger: true,
      animation: {
        // This time slide to the right because we are going back
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    });
  }
});

var AddTaskView = Jr.View.extend({

  render: function(){
    this.$el.html(AddTaskTemplate);  
    return this;
  },
  events: {
    'click #btnBack': 'onClickBack'
  },
  onClickBack: function() {

    Jr.Navigator.navigate('home',{
      trigger: true,
      animation: {
        // This time slide to the right because we are going back
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    });
  }
});


var AppRouter = Jr.Router.extend({
  routes: {
    'home': 'home',
    'addTask': 'addTask'
  },

  home: function(){
    var homeView = new HomeView();
    this.renderView(homeView);
  },
  addTask: function(){
    var addTaskView = new AddTaskView();
    this.renderView(addTaskView);
  }
  
});

var appRouter = new AppRouter();
Backbone.history.start();
Jr.Navigator.navigate('home',{
  trigger: true
});

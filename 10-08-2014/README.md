# 10/08/2014

# Backbone vs Ember

These aren't exact equivalents, since Ember objects have much more functionality built into them then the Backbone objects, but it is meant to help see approximately how you would use certain Backbone concepts in Ember.js.

## Router

### Backbone

```js
var TodosRouter = Backbone.Router.extend({
  routes: {
    '': 'todos'
  },

  todos: function(){
    var todos = new TodosCollection();
    todos.fetch().done(function(){
      var todosView = new TodosView({collection: todos});
      todosView.render();
    });
  }
});
```

### Ember
```js
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
```

## Model

### Backbone

```js
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    isCompleted: false
  }
});
```

### Ember

```js
Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
```

## View

### Backbone

```html
<script type="text/template" id="todo">
  <input type="checkbox" <%= isChecked ? 'checked="checked"' : '' %> class="toggle">
  <label><%= title %></label><button class="destroy"></button>
</script>
```

```js
var TodosView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(opts){
    var options = _.defaults({}, opts, {
      $container: $('body')
    });

    options.$container.append(this.el);

    this.listenTo(this.collection, 'add remove', this.renderChildren);

    this.render();
  },

  render: function(){
    this.renderChildren();
  },

  renderChildren: function(){
    this.itemViews = this.itemViews || [];
    _.invoke(this.itemViews, 'remove');

    var self = this;
    this.collection.each(function(child){
      var childView = new TodoView({
        model: child,
        $container: self.$el
      });
      self.itemViews.push(childView);
    });
  }  
});

var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template( $('#todo').text() ),

  events: {
    'change input[type=checkbox]': 'toggleIsCompleted'
  },

  initialize: function(opts){

    var options = _.defaults({}, opts, {
      $container: $('body')
    });

    options.$container.append(this.el);

    this.render();

    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function(){
    this.$el.html( this.template(this.model.toJSON()) );
    if(this.model.get('isCompleted')) {
      this.$el.addClass('isCompleted');
    }
  },

  toggleIsCompleted: function(e){
    this.model.set('isCompleted', $(e.target).is(':checked'));
  }
});
```

### Ember

```html
<script type="text/x-handlebars" id="todos">
  <ul id="todo-list">
    {{#each}}
      <li {{bind-attr class="isCompleted:completed"}}>
        {{input type="checkbox" checked=isCompleted class="toggle"}}
        <label>{{title}}</label><button class="destroy"></button>
      </li>
    {{/each}}
  </ul>
</script>
```

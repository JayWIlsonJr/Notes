# Backbone: Choose Your Own Adventure
This guide is meant to help you:
1. Follow the Single Responsibility Principle
2. Figure out how to break an application down into its Backbone parts.

If you're using the code below, try not to copy and past it. Rather, type it out by hand to work it into your muscle memory.

# Start Here

- [I don't know what application domain means](#application-domain)
- [I need to make something appear on the page](#defining-a-view)
- [I need to do something when the user interacts with the page](#responding-to-user-interaction)

# Application Domain
In an application, the domain is the conceptual area that is specific to the actual job being done by the app. You should try to identify all of the domain objects before you start programming.

## Example: Todo app
The domain of a todo app consists of:
### Tasks
- Have a title
- Can be either incomplete or complete

### Task list
It's a list of Tasks

# Defining a view

A view is an object that manages a visible section of your application. It is used to manage zero or one domain objects and one DOM element.

What kind of domain object do you need to manage?
- [It is a single object that is not part of a collection (e.g. an order of food)](#defining-an-item-view)
- [It is a single object that is part of a collection (e.g. a food item on a menu)](#defining-an-item-view)
- [It is a collection of objects (e.g. a menu of food items)](#defining-a-collection-view)
- [It doesn't need to manage a domain object](#TODO)

# Defining an item view

An item view is a view that represents a single domain object.

**Note:** It should not matter whether the object is part of a collection or not. If a collection or collection view needs to respond to changes in a model, it should listen for the appropriate `change` events. All communication between an item view and its parent view should go through the model.

Steps for defining an item view:

1. [Give the constructor a good name](#constructor-naming)
2. [Add an initialize method](#view-initialize)
3. [Add a render method](#view-render)

# Defining a collection view

A collection view represents a collection of domain objects.

**Note:** Any logic associated with individual objects should be delegated to the item view, the only logic that should be in a collection view should be related to the collection as a whole (e.g. when items are added or removed, the length of the collection, filtering and sorting the collection, etc.).

Steps for defining a collection view:

1. [Give the constructor a good name](#constructor-naming)
2. [Add an initialize method](#view-initialize)
3. [Add a render method](#view-render)
4. [Create the item views](#view-rendering-children)
5. [Optional: define the comparator](#TODO)

# Constructor: naming

Constructors (as well as variables) should, as much as possible, be named after their role in the application domain. Additionally, it is often helpful to follow the following conventions:

- A model constructor should be named as the singular version of its domain object:
    ```js
    var Task = Backbone.Model.extend({});
    ```

- A collection constructor should be named using the plural form of its domain object:
    ```js
    var Tasks = Backbone.Collection.extend({
      model: Task
    });
    ```

- An item view should be named as the combination of its domain object and its role in the DOM, plus the suffix `View`.
    ```js
    var TaskItemView = Backbone.View.extend({
      tagName: 'li'
    });
    ```

- A collection view should be named as the combination of its domain object and its role in the DOM, plus the suffix `View`.
    ```js
    var TasksListView = Backbone.View.extend({
      tagName: 'ul'
    });
    ```

- Views shouldn't usually be named based on their tag name, but as much as possible, after their role in the domain.
    ```js
    // INCORRECT
    // This is not very descriptive about its role
    // and would have to change if I changed the type of element
    var TaskInputView = Backbone.View.extend({
      tagName: 'input'
    });

    // CORRECT
    // This is better because it actually describes what it does
    var CreateTaskView = Backbone.View.extend({
      tagName: 'input'
    });
    ```

# View: initialize

The responsibility of the `initialize` method is to put the view into its initial state so that it can successfully fulfill its role of mediating between a model and a DOM element.

```js
var TaskView = Backbone.View.extend({
  // make sure to spell it right
  initialize: function(opts){

    // 1. Sometimes it will be instantiated without options, so to guard against errors:
    var options = _.defaults({}, opts, {
      $container: $('body')
    });

    // 2. Part of putting a view into its initial state is to put its element
    //    into the DOM. Its container should be configurable using an option
    //    so that a) it can be used anywhere in the app and b) it can be
    //    easily unit tested.
    options.$container.append(this.el);

    // 3. Render the content of the view
    this.render();

    // 4. Optional: Set up any methods that need to be triggered when the
    //    domain object changes.
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.collection, 'add remove', this.renderChildren);
  }
});
```

# View: render
The `render` method of a view is responsible for generating and displaying the content for the element and the domain object that the view manages.

- If the view is a collection view, `render` should not be responsible for generating the item views, but it is repsonsible for *calling* the method that is responsible for generating the item views.
- `render` should be "idempotent", which means I should be able to call it multiple times without breaking my application. This means a) `render` should not be responsible for appending `this.el` to the DOM, since this should only happen once and b) `render` should make use of `this.$el.html(content)`, rather than `append` or `prepend`, so that the content isn't duplicated.

```js
var TasksListView = Backbone.View.extend({
  render: function(){
    // 1. Grab the contents of the model
    // 2. Pass the model contents to the template
    // 3. Put the rendered template in the DOM
    this.$el.html( this.template(this.model.toJSON()) );

    // Optional: if this is a collection view, call the method that creates
    // the child views
    this.renderChildren();
  }
});
```

# View: rendering children
Since item views are responsible for rendering themselves and their model's content, the main responsibility of a collection view is to just create item views for each item in its collection.

One of the main benefits of having a separate method that handles rendering the child views is that it makes it easy to call it when the collection changes, without having to re-render the whole collection view.

```js
var TasksListView = Backbone.View.extend({
  renderChildren: function(){
    this.itemViews = this.itemViews || [];
    _.invoke(itemViews, 'remove');

    var self = this;
    this.collection.each(function(child){
      var childView = new TaskItemView({
        model: child,
        $container: self.$container
      });
      self.itemViews.push(childView);
    });
  }
})
```

# Responding to user interaction

What kind of thing do you need to do?

- [I need to change an element inside the element the user is interacting with](#changing-an-internal-element)
- [I need to change an element that's not inside the element the user is interacting with](#changing-an-external-element)
- [I don't need to change anything on the page](#TODO)

# Changing an internal element

What kind of change is it?

- [It is a change to the domain (e.g. completing a todo or adding an item to the order)](#using-model-collection-events)
- [It is not a change to the domain (e.g. changing from display to edit mode)](#TODO)

# Changing an external element

Do the elements share a domain object?
E.g. If I click "Add to Order" in one view and the item appears in an order list in another view, those views share an order object.

- [Yes](#using-a-shared-model-or-collection-to-communicate-between-views)
- [No](#TODO)

--------------------------------------------------------------------------------
# Using model/collection events
Model and collection events are most commonly used to:
1. Communicate between views
2. Re-render views when the data changes.

In the view that is handling the user interaction, **the only responsibility of the event handler should be to update the model or collection**:

```js
var TaskView = Backbone.View.extend({
  // the function name should be in your "domain language", not in the language of DOM/JS
  // i.e. 'toggleCompletion', not 'wasClicked'
  events: {
    'click .checkbox': 'toggleCompletion'
  },

  toggleCompletion: function(){
    this.model.toggleCompletion();
  }
});

var Task = Backbone.Model.extend({
  toggleCompletion: function(){
    this.set('isComplete', !this.get('isComplete'));
  }
})
```

Then, other views that need to respond to the change should `listenTo` the model or collection for that change:

```js
var FoodView = Backbone.View.extend({
  events: {
    'click .add-to-order': 'addToOrder'
  },

  addToOrder: function(){
    this.collection.add(this.model);
  }
});

var OrderView = Backbone.View.extend({
  initialize: function(){
    // ...
    this.listenTo(this.collection, 'add remove', this.renderChildren);
  }
})
```

# Using a shared model or collection to communicate between views

The best way to communicate between views is to use shared models and collections. The steps are:

1. Create the model or collection "above" where you create the views that need to communicate.
2. Pass the model or collection to the constructor of the views in the options.
3. [Communicate using model/collection events](#using-model-collection-events)

    ```js
    var tasks = new Tasks();
    var createTaskView = new CreateTaskView({collection: tasks});
    var tasksListView = new TasksListView({collection: tasks});
    ```

# TODO
If you got linked here, it means the section you were linked to hasn't been completed yet. Feel free to add some notes and send a pull request!

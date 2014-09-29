# Chapter 2: Views

Backbone Views are the mechanism you'll almost always use for getting your data into the page. They don't "do" much by default, which throws off most people. Like most of the rest of Backbone, you have to be rather explicit about what you want to happen. Once you adjust to the fact that there is very little magic, though, they can be pretty handy. Think of Backbone Views as a Trapper KeeperÂ® for what would otherwise be a garbled mess of jQuery events.

Let's look at a classic usage of Backbone.View:

```js
var DogView = new Backbone.View.extend({

  template: function(model){
    return "Hi, I'm a dog named " + model.get('name');
  },
  
  initialize: function(){
    $('.dog-list').append(this.el);
    this.render();
  },

  render: function(){
    this.$el.html( this.template(this.model) )
  }

});

var DogModel = new Backbone.Model.extend();
var sadie = new DogModel({name: "Sadie"});

new DogView({model: sadie});
```

Wow, what the heck just happened? Let's look at the DogView constructor that we created first. We're overriding three methods, all of which are noops: `template`, `initialize`, and `render`. As we've seen before, `initialize` is called for us automatically whenever the constructor is done creating an instance. 

We're doing something interesting here. In the `initialize` we're putting some mysterious property, `this.el`, into some element on the page. This little property is the cause of much confusion, so pay careful attention: Every Backbone.View instance is given an empty div upon creation, and it's stored in this.el. 

This div is not injected into the page automatically; it just lives in memory. It's literally the same as typing `$('<div></div>')[0]`. That's it! No other functionality... ha, well sort of. You might be wondering how an empty div that has no content or class and that doesn't exist in the page is useful. Well, frankly it isn't useful as is. That's why we inject it into the page in the initalize.

You'll see `this.el` reappear inside the render function, which is called on the next line. But this time it's not `this.el` it's `this.$el`. Some people tend to prefix variables with `$` to remind themselves that the content of the variable is a jQuery object. This is no exception. `this.$el` is equalivalent to `$(this.el)` (which in our situation is the same as `$('<div></div>')`), and really only exists for convenience.

So we've put `this.el` into the page, call `render`, and dump the return value of `this.template(this.model)` into `this.el`. You may be curious as to why we did the first two inside of the initialize, and the third in the render function. You'll rarely call `initialize` yourself; instead, it's intended to be called for you automatically and only one. Think of it as an "initial setup" method. Any set of functionality that should absolutely run, but really only happen once per instance (even if more granular chunks of that functionality *can* run multiple times) should usually be put into the `initialize` method.

The rationale here is that we only want to put `this.el` into the page once, but we may want to `render` and re-`render` multiple times. If you think of `this.el` as a sort of shell or container, which we will fill with content later, the purpose is easier to grast. Thus we've decoupled injection into the page from content rendering.

What's really powerful about this setup is that our view instance now has a permanent reference (`this.el`) to it's manifestation in the DOM, and we haven't had to use any kind of unique selectors or ids to accomplish this. We could have 1000 view instances, and each would only know about *its* `this.el`. This is powerful because of view methods like `this.remove`, which will destroy its `this.el` and unbind any events. Even more compelling, however, is that we can also easily scope event listeners to only listen to `this.el`. Observe: 

```js
var TodoView = new Backbone.View.extend({

  events: {
    "click .done": "markAsDone"
  },

  markAsDone: function(){
    this.model.set('done', true).save();
  },

  ...

});
```

The odd use of object literal syntax in the `events` property might throw you off, but it's actually valid JS. Because property names can be strings, spaces and dots and other normally invalid property name characters are allowed. Backbone is taking a bit of a shortcut here, but it works out nicely. Inside the `events` we're actually creating a click event. In plain ol' jQuery it might look like:

```js
$(this.el).on('click', '.done', this.markAsDone);
```

... which would be legitimate to place inside of the `initialize`. However, the benefit of the `events` object is that when we destroy this view with `this.remove`, it will not only remove `this.el` from the DOM, but it will also unbind all of the events specified in the `events` object. Leaving event listeners that are no longer needed still running in your app can cause performance and memory issues over time, so having Backbone unbind these for us automatically is great!

I hope that it's clear by looking at the `markAsDone` method that we've created a bridge between the model and the DOM. Binding UI element interactions to a specific data object is no small task, and Backbone has made this much simpler for us. 

## Excercise!

See if you can iterate of a collection of models and send each model to a view constructor. Can you set up the view contructor so that simply be being created, the views will render themselves into the page (Hint: you'll want to use `initialize`!). Try to hook up an events object so that you can click a button and change the state  of *just that model* and then save just that model to the server.

### Bonus

See if you can figure out how to use `_.template` with your view. Have fun!

### Questions

  * Why do views do for us?
  * Why is the `events` object (usually) better than a normal event listener?
  * When and why do we use `this.` to refer to methods and properties inside of the contructor `extend` calls?
  * What are you still fuzzy on after reading this? (Hint: Do some further reading on points that confused you... again!)
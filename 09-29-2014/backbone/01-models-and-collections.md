# Chatper 1: Models and Collections

In a broad sense, a Backbone Model is a constructor that determines the "shape" that your raw data will temporarily evolve into. In other words, a Model constructor imparts (non-permanently) a set of predefined and hand-rolled (by you!) functions that you can add to raw data to make it useful.

```js
[
  {
    name: "Mason",
    cool: false
  },
  {
    name: "Sadie",
    cool: true
  }
]
```
... I might say "Hmmm.... both of these need to be run through a constructor so I can give them both a `save` method and a `isCool`". But, because those instance methods will be the same for every object, I really only want to store the data that *changes* from object to object.

As a result, I'll pull down "raw", method-less data from the server, run it through a constructor, but send only the "raw" data back to the server when I'm updating the object.

It turns out that this is a really cool idea. Taking raw data, souping it up with some cool methods, and then stripping the methods and sending only raw data back to the server insures that I'm storing only the minimal amount of data per object, and that I'm only combining that data with those methods and functionality *when I need to*. Cool!

This is where the Backbone.Model comes in handy! Backbone.Model is nothing but a constructor (notice the culturally accepted indicator of a constructor: the capital first letter!). It really is a plain old constructor. 

It does have one fancy method though... (functions can have methods in JS! O_o). I has an `extend` method. Usually when you find an `extend` method in JS, it means "take these two objects and (over)write all of the methods from one into the other."... sort of like `reeses = _.extend({}, peanutButter, chocolate);`... sort of.

In Backbone terms, `extend` actually means "take this object literal that I'm about to give you, use its properies and methods, overwrite any conflicting Backbone.Model properties and methods by the same name, and combine the non-conflicting ones with this object literal to make one cool object". You basically get your own customized version of Backbone.Model. Here's what that looks like:

```js
MasonsCoolCustomModelConstructor = Backbone.Model.extend({
  
  initialize: function() {
    console.log('wow, a function was born!');
  }

});
```

This would create a new constuctor, `MasonsCoolCustomModelConstructor`, which would come prepackages with ALL of the instance methods that Backbone.Model imparts, plus a custom version of `initialize`, which is a "noop". I pronounce this word as "no op", but some people pronounce it as "newp". YMMV. Let's talk about noops, and then let's talk about what `initialize` means.

A noop is function that doesn't do anything and has no return value (other than the default JS return value, which is `undefined`). Backbone is full of these, and it's a little confusing. You might ask, "why have a function that does *nothing*?" Good question. The idea is that *you*, the brilliant programmer, would fill this in. The noop is simply a placeholder for your cool idea. The two most notorious ones in Backbone are `initialize`, which all four major constructors in Backbone have, and `render`, which normally only Backbone.View has (more on this later!).

The `initalize` method is a bit of a mystery to most new Backbone hackers. It's a method that belongs to every instance born of all four Backbone constructors (Backbone.Model, Backbone.Collection, Backbone.View, Backbone.Router), and, in English, it means "Hey, instance that just got created! You should run this function ASAP.". This is is really useful for a ton of reasons. Sometimes you just want to know when a instance has been created. More often though, you'll want to help aquaint a new instance with some information, some event bindings, or trigger some series of events. There is no limitation on what happens inside of an initialize; it's a blank canvas for you and your instance's needs. Daunting, isn't it? Trust your gut that you'll know when something belongs in an initialize and when it doesn't.

N.B. - **YOU MUST SPELL INITIALIZE CORRECTLY**. Because of what Backbone does behind the scenes, it will expect you to have spelled this function correctly. If you're experiencing weirdness, check your initialize method's property name for spelling errors. Common culprits include: 'initilize', 'intialize', and 'intalize'.

Now that we have model constructor, we can pass raw data to it and a few things will happen:

  * a new instance will be created
  * it will have all of the properties and methods that were passed into the `extend` call
  * it will have all of the built-in Backbone.Model instance methods (except those that were overriden in the `extend`)
  * the raw data will be stored in the instance in an property called `attributes`
  * the initialize function will be run automatically for you.

This will generally look like this:

```js
var coolInstance = new MasonsCoolCustomModelConstructor({
  name: "Mason",
  cool: false
});
```

Cool! (Make careful note of the `new` keyword. If you forget this, everything will break.) This instance now has lots of good methods built in! The one's you'll probably use most often are `get`, `set`, `save`, and `fetch`. (Make sure to do a quick read of those in the Backbone docs: http://backbonejs.org/#Model) Lucky for you, calling `save` on a model instance in Backbone is very convenient. As long as you've provided enough information about the url it should POST or PUT to, the model can handle all of the AJAX transaction necessary to update the the server.


Normally, however, it's most convenient to save models within the context of a collections. As such, let's chat about Backbone.Collection!


Backbone.Collection is a pretty simple mechanism. Collection instances are meant to store an array of model instances and also house methods that are useful for working with a group of models. 

Just like Backbone.Model, you'll want to call `extend`, and provide an object literal with properties and methods that you'd like to add or overwrite. Normally, you only need two pieces of information to make a collection work. Generally when you extend Backbone.Collection you'll want to provide a url from which the collection can be fetched, and a reference to the constructor that its individual models will use. Here's an example:

```js
  AnExampleCollection = Backbone.Collection.extend({
    model: MasonsCoolCustomModelConstructor,

    url: 'http://some-server-somewhere.org/api/some-end-point'
  });

```

This would return a constructor that you would then use to create an instance.The collection instance is smart enough to run its raw data it's given through the constructor that you provided in the `model` property and to use the `url` property when you tell it to `fetch`.

Let's imagine that the url used above would return two objects in the JSON payload:

```js
[
  {
    "name": "Mason",
    "cool": false
  },
  {
    "name": "Sadie",
    "cool": true
  }
]
```

If this was true, using the collection would go something like this:

```js
var collectionInstance = new AnExampleCollection();

collectionInstance.fetch().done(function(){
  console.log('the first thing in collectionInstance after fetching is', collectionInstance.first());
});
```

Here, we're creating a collection instance, fetching its data, and then console logging the first model in the collection. It's important to realize that collection instances aren't actually arrays; they *contain* a models array inside of the `models` property. You rarely need to access that property directly though, as many of Underscore's array methods (http://backbonejs.org/#Collection-Underscore-Methods) are already imparted to each collection instance, and will automatically target the instance's `models` property. Awesome!

If a model belongs to a collection, it will use the collection's `url` property when calling `save`, `fetch` and `destroy` methods from the model. Models won't do this on their own, but if they belong to a collection, Backbone will "figure out", based on normal RESTful/CRUD conventions when to GET/POST/PUT/DELETE and when to append the model's id to the url.

## Excercise!

Here's an API endpoint that will blindly accept any data its given in JSON form via POST (no trolling, please!), store it in a non-relational database, and return the object plus a unique id. It will return all objects POSTed to that url in an array when you GET.

http://tiny-pizza-server.herokuapp.com/collections/examples

See if you can create a model and collection constructor, an collection instance, and, using the `add` method on the collection instance, persist some fresh models to the database and fetch them again on refresh. Build this with the intention of turning this into a TODO app. Can you mark some models as "done" using the model instance `set` method?

A few things to know:
  * This server will return ids as `_id`, which is not what Backbone is expecting. You'll need to specifiy the `idAttribute` property in the model extend as '_id' to make things work.
  * While you can batch fetch from a collection, you *can't* batch save. You'll have to save each model instance individually.
  * It's probably easiest to start by opening a page that has Backbone loaded in your browser and fiddle around in the Chrome DevTools JS console. This will be a good place to start, but you'll probably want to move your code to Sublime (or whatever editor) once you're code is more than a few lines long.
  * If the data from the url above gets crowded, feel free to change the last word in the url. Any word will work, ex: http://tiny-pizza-server.herokuapp.com/collections/french-fries

### Bonus

See if you can also edit and delete existing models. Have fun!

### Questions

  * Why are models helpful? What do they offer?
  * What is handy about collections?
  * How would you imagine that you could render this data onto the page?
  * What are you still fuzzy on after reading this? (Hint: Do some further reading on points that confused you)


# Install gulp-webapp generator
`$ npm install -g generator-gulp-webapp`

# Architecture Patterns
http://addyosmani.com/resources/essentialjsdesignpatterns/book/

## Module Pattern

```js
// type window to communicate intent
window.App = {};

// This is for view constructors, not instances.
App.Views = {};

App.Models = {};

App.Routers = {};

// routers handle app state, so store any necessary instances on the router
App.router = new App.Routers.AppRouter();
// you shouldn't usually need to do this
App.router.appView = new App.Views.AppView();
```

## Revealing Module Pattern
In general, you don't test hidden functions.

```js
(function(){
  function isValidColor(color){
    return true;
  }

  function Dog(options){
    if(isValidColor(options.color)){
      this.color = options.color;
    }
  }

  App.Models.Dog = Dog;
})();
```

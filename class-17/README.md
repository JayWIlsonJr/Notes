# 09/23/14

## JS Review
http://jsbin.com/wagura/1/edit

## Strict Mode (`'use strict';`)
- http://jsbin.com/wexiqo/3/edit
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

- Prevents implicit global variable creation
- Throws an error when you delete an undeletable property
- Throws an error when you have duplicate properties in an object literal
- Throws an error when you try to delete a "bare word", i.e. `delete someVariable;`
- Throws an error when you try to declare a variable with the name `arguments`;
- Doesn't alias `arguments` to parameters.
- Makes the default value of `this` be `undefined`.

## Prototypes and Constructors
http://jsbin.com/kijexe/1/edit

- a function + the `new` keyword == a constructor
- in a constructor, `this` is the object being constructed
- instanceof can be used to determine whether an object is an instance of a constructor
- Beware constructors in non strict mode, `this` == `window`, which can cause bad behavior when you forget the `new` keyword.
- You can add methods to the object in the constructor, but this isn't the right way.

    ```js
    function Dog() {
      this.bark = function(){};
    }
    ```

- Prototypes allow objects to inherit properties and functions from other objects in a hierarchy.
- Prototypes are wired up when you use the `new` keyword. The `.prototype` of the constructor function is connected to the instances of that constructor.
- `this` in a prototype's method is the instance that the method was called on.

    ```js

    function Dog(){}

    Dog.prototype.bark = function(){
      console.log(this.name + ' says woof');
    }

    var dog = new Dog();
    dog.name = "Fido";
    dog.bark(); // => Fido says woof
    ```



## Using constructors IRL
http://jsbin.com/xomizo/1/edit

## Prototype Chain
![](prototypes.jpg)

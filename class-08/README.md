# 09/08/14

Parameters are formal
- They are part of the function declaration

Arguments are actual
- They are part of the function execution

There needs to be a symmetry between arguments and parameters to have the code do what you expect.

# Type coercion
- If one operand of the `+` operator is a string, the other is coerced into a string.
- The unary `+` operator always coerces to a Number.
- The `!` coerces to a Boolean and negates it.
## ==
- null == undefined
- When `Number == String`, types are coerced to Number
- `anything == true`, first it will try strict equality, then it will change true to `1` and try again.
- The same as above for false, but it coerces to 0
- `Object == Number or String`, the Object is coerce to the type of other operand using .toString() or .valueOf()

# Scope
## Context
Context means the context in which code is executing (scope, strict mode, value of `this`)
- Global context
- Function context is created every time a function is executed.
- `eval` creates a new context

## Scope
Answers the questions "Where do variables live and how does my code find them?"
- Global
- Function

## Hoisting
Variable declarations **but not assignments** are moved to the top of their scope.

Both the declaration and body for function declarations are hoisted.

Only the declaration for function expressions is hoisted.

# `this`
A JavaScript keyword that evaluates to different values in different execution contexts.

- Global and global functions
- Inside methods (even if the function was added to the object later)
- jQuery

# Why jQuery
- Selecting elements
- DOM manipulation
- Event handling
- Ajax
- Cross browser development

# jQuery
- select elements (use the `$() function`, returns the jQuery object)
- read methods (e.g. $('div').text())
- write methods (e.g. $('body').append(someElement))
- `$(this)` is a common pattern in event handlers
- It's useful to cache queries:

    ```js
    var $items = $('.my-list li');
    $items.addClass('highlighted');
    setTimeout(function(){
      $items.removeClass('highlighted');
    }, 1000);
    ```

- `$(document).ready(function(){})` and `$(function(){})`

## Events
In jQuery event handlers, the value of `this` is the element that the event was triggered on.

# JSBins
- http://jsbin.com/niripa/2/edit
- http://jsbin.com/fudulu/3/edit
- http://jsbin.com/refapu/3/edit
- http://jsbin.com/vifevu/1/edit
- http://jsbin.com/lozutu/2/edit
- http://jsbin.com/tupiqe/1/edit

# Cool Videos
- http://delve.tv/essays/

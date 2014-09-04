# 09/04/14

# Comparison Operator
## Loose (they coerce the type)
- `==`
- `!=`
- `>`
- `>=`
- `<`
- `<=`

## Strict (do not coerce the type)
- `===`
- `!==`

# Logical Operators
- `!` (not)
- `&&` (and)
- `||` (or)

# Falsy
- `""`
- `0`
- `false`
- `undefined`
- `null`
- `NaN`

# Truthy
Everything else

# Decisions
```js
if(/* something truthy */){
  // do something
} else {
  //something else
}
```

- I read `if( ! something)` as "unless"

# Arrays
A type that is an ordered list of other things.
## Creating an array with literal syntax
- `var theArray = ['hay', 123]`
## Getting values out of an array
- `0` is the first index
- `var hay = theArray[0]`
- `var num = theArray[1]`
## Changing an array
- `theArray[1] = 321`
- `theArray[2] = "cool"`
## Array length
- `var length = theArray.length`

# Objects
Objects are containers of values, including functions, arrays, and other objects.

## Literal syntax
```js
var theObject = {
  someProperty: "cool"
};
```

## Properties
Properties are like variables on objects.

```js
var theObject = {
  someProperty: "cool",
  someOtherProperty: ["hay", "guyz"]
}

// New properties are created automatically when you assign to them
theObject.thirdThing = 123;

// Access properties with the dot (.)
var num = theObject.thirdThing;

// Or with brackets and strings
var cool = thirdThing['cool']
```

# Functions
A function is a group of statements that can be called multiple times, and can be stored in a variable or passed around.

To put it another way: A function is an object that contains JavaScript code that is run when I call the function.

## Function declaration
A function declaration is a complete statement that can stand on its own. It creates a function with the name you specify.

```js
function coolFunction(thing) {
  alert(thing);
}
```

## Function expression
A function expression cannot stand on its own, but we can assign it to a variable or pass it to another function.

```js
var aFunction = function(thing) {
  alert(thing);
}

document.getElementById(id).onclick = function(){
  alert("Hay");
};
```

# Iteration
## forEach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

## map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## reduce
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

# Referential transparency

```js
var array = [1, 2, 3];
var doubled = array.map(function(num){
  return num * 2;
});
var quadrupled = doubled.map(function(num){
  return num * 2;
});

// The following means the same thing:

var quadrupled = [1, 2, 3].map(function(num){
  return num * 2;
}).map(function(num){
  return num * 2;
});
```

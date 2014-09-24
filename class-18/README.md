# Constructors vs Prototypes
- Anything that belongs to *all* instances of a constructor should go on the prototype.
- Anything that belongs to *this particular instance* of a constructor should be assigned to `this` inside the constructor.

## Example

```js
// Whether or not a dog is hungry belongs only to *this particular dog*, i.e. a particular instance of the Dog constructor.
function Dog(){
  this.hungry = true;
}

// All dogs should be able to bark, i.e. all instances of the Dog constructor should be able to bark. `bark` should be on the prototype

Dog.prototype.bark = function(){};
Dog.prototype.isAnimal = true;
```

# Intro to testing

```js
function max(first, second){
  if(second > first) {
    return second;
  } else {
    return first;
  }
};

it("should take two numbers and return the largest", function(){
  expect(max(1, 2)).toBe(2);
  expect(max(1, 3)).toBe(3);
  expect(max(3, 1)).toBe(3);
  expect(max(4, 4)).toBe(4);
  expect(max(0, 0)).toBe(0);
  expect(max(-10, 0)).toBe(0);
  expect(max(-Infinity, 1276)).toBe(1276);
  expect(max("hamburger", 45)).toBe();
});
```

# How to call Array's functions on array like objects

```js
(function(){
  Array.prototype.forEach.call(arguments, function(arg){
    console.log(arg);
  });
})("cool", "arguments");
```

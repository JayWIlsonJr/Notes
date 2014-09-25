# 09/25/2014
- https://github.com/TIY-GVL-FEE-2014-Aug/invaders
- https://github.com/TIY-GVL-FEE-2014-Aug/atm

# [Mocha](http://visionmedia.github.io/mocha/)
Mocha provides a test runner (e.g. `describe` and `it`).

# [Chai](http://chaijs.com/)
Chai provides the expectations (e.g. `to.be.true`).

# Inheritance in JavaScript

http://jsbin.com/nivuri/1/edit

```js
function Character(name){
  this.name = name;
}

Character.prototype.fight = function(){
  console.log(this.name, this.power);
}

function Wizard(name){
  Character.apply(this, arguments);
  this.power = 10;
}

Wizard.prototype = Object.create(Character.prototype);
```

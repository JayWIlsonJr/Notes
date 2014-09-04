# Debugging
1. Find the error.
2. Go to the code where the error is.
3. Google the error (Don't spend more than 5 mintues here).
4. Construct a model of what's happening. It might help to say things out loud.

# What is JavaScript for?
1. Accessing content
2. Modifying content
3. Program instructions
4. Responding to events

# What is the DOM?
It stands for Document Object Model and is the objects that the browser creates when it eats HTML
![](http://d.pr/i/xGQf.png)

# How to Solve a Problem
1. Start with your goal. (Make a peanut butter & jelly sandwich)
2. Write out the steps.
3. Draw pictures.
4. Write code.

# Syntax
```js
document.getElementById('header');
```
- `document`: object
- `.`: property accessor
- `getElementById`: property (in this case, a function)
- `()`: function call
- `'header'`: parameter (in this case, a String)
- `;`: end of the statement

# Statement
Like a sentence, a statement is one coherent "thought" or instruction.
- It should appear on its own line.
- It should end with a semicolon (a semicolon means "this instruction is over, move to the next one.")

# Comments
A comment is ignored by the JS engine.
- `//` starts a single line comment.
- `/*` starts a multiple line comment, `*/` ends the comment:
```js
// This is a single line comment.
console.log("Cool"); // It can be at the end too
/* This is a multiple line comment.
Cool right? */
```

# Types
There are two types of "things" in JavaScript:
## Primitives
Primitives are simple values that can be passed around and referenced directly. They are kind of like cash. If you give someone a $5 bill, they have the money and they can use it immediately.

## Objects
Objects are more abstract "things". They are like checks. They're too complex to be passed around or referenced directly, you have to know how to use them to actually get the value out of them.

# Primitives
## Numbers
```js
1;
3.14;
-20;
4.5e7;
```

## String
```js
'Cool';
"Cool";
"That was 'cool'";
"That was \"cool\"";
```

### Booleans
A boolean represents something that is true or false.
```js
true;
false;
10 > 5;
```

# Variable
Label for a value.

## Declare a variable
```js
var age;
```

## Assign a value to a variable

```js
age = 47;
```

A single equal sign is the "assignment operator".

## Shorthand

Declare and assign:
```js
var age = 47;
```

Declare multiple variables:
```js
var age, favoriteColor, name;
```

Declare and assign multiple:

```js
var age = 37, favoriteColor = "green", name = "Jake";
```

## Naming
- First character a-z, A-Z, $, `_`
- Variables starting with $ are often used for DOM objects
- Variables starting with `_` are often used for things that are not meant to be used by the developer
- The other characters can be letters, $, `_`, numbers
- They are case sensitive.
- The convention, but not rule, is to capitalize each word after the first:

```js
var someCoolVariable;
```

# Operators
- = (assignment)
- Number operators (+, -, /, *, ++, --, %)
- Compound assignments (+=, -=, *=, /*)
- String operator (+)

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

# Cool functions
- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
- [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

# Using JavaScript
## In <head>

```html
<head>
  <title>Cool</title>
  <script>
    var cool = true;
  </script>
</head>
```

## External file (preferred)

At the end of the body:

```html
<body>
  <h1>Hay</h1>
  <script src="main.js"></script>
</body>
```

# Ignoring Files in Git

1. Create a file named `.gitignore` horizontal to (i.e. in the same directory as) your git repository. You will need to enable hidden files or use `$ ls -a` to see it.
2. Open `.gitignore` in your text editor.
3. List the files or folders you want git to ignore, one per line.
4. Add and commit the `.gitignore` file to git.
5. (Optional) If you have already committed the files you want to ignore, you will need to tell git to forget about them:

```sh
# Replace `<file-or-folder>` with the name of the file or folder you want git to forget about.
$ git rm --cached <file-or-folder>
```

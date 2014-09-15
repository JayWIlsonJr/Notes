# Referential Transparency
Any representation of a value can be substituted for any other representation of that same value.

```js
var someArray = [1, 2, 3];
someArray.forEach(function(){});
// functionally equivalent
[1, 2, 3].forEach(function(){})
```

## Functions
```js
$.getJSON(someUrl).done(function(data){
  console.log(data);
})

//


var someFunction = function(data) {
  console.log(data);
}

var jqXHR = $.getJSON(someUrl)

jqXHR.done(someFunction)
```

# Yeoman
- http://yeoman.io
- In general, only for new applications.
- Disclaimer: It's easy to let yeoman be an obstacle to understanding the underlying tools.
- Uses NPM packages to generate scaffold

```sh
$ npm install -g yo
$ npm install -g generator-tiy-webapp

# Start yeoman
$ yo
```

# Gulp

- Gulp is like a factory, files come in and different files come out.
- Gulp plugins do much of the heavy lifting.
- Gulp plugins are just node packages that you install with npm. (e.g. gulp-ruby-sass)
- The foundation of gulp is the "file stream" created with `gulp.src(pattern)`.
- You fit streams together with `.pipe`
- You create tasks with `gulp.task('task-name', aFunction)`
- Yeoman's tiy-webapp has a pretty nice gulpfile already

```sh
# build files into dist
$ gulp
# build and watch for changes
$ gulp watch
```

## Learning More
- http://hmphry.com/gulp/
- http://david.nowinsky.net/gulp-book/

# Ajax

- .get
- .post
- .ajax
- jqXHR object

http://jsbin.com/relev/1/edit?html,js,output

# Asynchrony
Beware of asynchrony. Asynchronous functions should/will always execuet after the current execution context is finished.

# Promises
Promises are a way to gain control over asynchrony. The callbacks will be executed in the order you add them.

```js
$.get(url)
 .done(function(){
   console.log("first")
 })
 .always(function(){
   console.log("second")
 })
 .done(function(){
   console.log("third")
 })

// => first, second, third
```

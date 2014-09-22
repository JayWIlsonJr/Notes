# 09/22/14

# Deploying
## Static Assets

"Static assets" refer to any files (e.g. .js, .css, .html, images, etc.) that can be served directly to the browser.

For client work, I usually use [Amazon S3](http://aws.amazon.com/s3/). For personal projects, I use GitHub Pages.

### Github Pages
[GitHub Pages](https://pages.github.com/) is a free, fairly easy way to deploy static assets.


### Deploy a site already in the right format to GitHub Pages

This is for projects like Surf and Paddle that already have an `index.html` in the root directory.

```sh
$ git checkout -b gh-pages
$ git push origin gh-pages
```

### Deploy a site using tiy-webapp to GitHub Pages

```sh
$ gulp build
$ git add .
$ git commit
$ git push origin master
$ gulp deploy
```
## Web Server
Everything we've done so far is front end engineering of static assets. If you want to do [backend programming](http://skillcrush.com/2012/10/26/backend-programming-from-ruby-to-node-js/), you will need to deploy to a platform that supports databases, backend runtime environments, web servers, etc.

If your project has the budget for it, [Heroku](http://heroku.com) is a great option. If not, I usually use [Digital Ocean](http://digitalocean.com) to set up a server, but that adds considerable complexity.

### `app.js`
```js
var express     = require('express'),
    serveStatic = require('serve-static'),
    app         = express();

app.use(serveStatic('dist'));

app.get('*', function(req, res){
  res.end("Hello!");
});

var port = process.env.PORT || 8080;

app.listen(port);
```

### `Procfile`
```
web: node app.js
```

### Deploy to Heroku
You will need the [Heroku Toolbelt](https://toolbelt.heroku.com/).

```sh
$ brew install heroku
```

Then to deploy:

```sh
$ npm install --save express serve-static
$ git add .
$ git commit
$ git push origin master
$ heroku apps:create
$ git push heroku master
```

# git branching

```sh
$ git branch gh-pages
$ git checkout gh-pages
# Equivalent
$ git checkout -b gh-pages
```

# Changing a repository name
If you want to change the name of a repository, you will need to point your local repo at the new repository URL.

1. Change the name of the repo on GitHub.
2. Copy the new URL from the sidebar on GitHub.
3. Point your repo at the new URL:

```sh
$ git remote set-url origin <URL goes here>
```

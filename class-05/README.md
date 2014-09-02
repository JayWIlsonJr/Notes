# Checking if your computer is set up correctly

```sh
$ curl -s https://gist.githubusercontent.com/jacobthemyth/32da32a6a799e8ec57a1/raw/54933257d71edbe7aee0279f4561d935e758f28d/checkit.sh | bash
```

# Install Oh My Zsh
```sh
$ curl -L http://install.ohmyz.sh | sh
```

# CSS selectors
http://www.quirksmode.org/css/selectors/#link4

# Understanding nth-child
http://www.sitepoint.com/web-foundations/understanding-nth-child-pseudo-class-expressions/

# Sass

## Variables

```scss
$base-link-color: #53A850;

a {
  color: $base-link-color;
}
```

See http://jsbin.com/xohedo/1/edit

## Nesting

```scss
header {
  ul {
    display: inline-block;

    &.cool {
      background: green;
    }
  }
}
```

See http://jsbin.com/yihez/2/edit

## Mixins

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
```

See http://jsbin.com/kiduvi/1/edit

# Getting your project ready for gulp

1. Create an `app` directory in your Surf & Paddle directory.
2. Create a `styles` directory inside `app`.
3. Move your CSS file to `app/styles`.
4. Change the extension of the file from `.css` to `.scss` (If you're doing this in Finder, you will need to go to Preferences > Advanced and make sure "Show all filename extensions" is enabled).
5. Download the package.json and gulpfile.js into your Surf & Paddle directory.
6. Change your CSS `<link>` tag to point to `dist/styles/main.css` insteand of just `main.css`
7. Use gulp to watch for changes, and the styles should update automatically in your browser when you refresh the page.

# Install Sass

To install sass globally to allow you to compile sass from the command line:

```sh
$ npm install -g node-sass
```

Then to actually compile a file called `main.scss`:

```sh
$ node-sass main.scss
```

By default, this will output a CSS file in the current directory with the same name.

# Install Gulp

To install the global gulp command line utility:

```sh
$ npm install -g gulp
```

# Use Gulp

Then, in each project you want to use gulp with, you will need a `package.json` to install node packages (like gulp and sass).

```sh
# Save the package.json to your project directory
$ curl https://raw.githubusercontent.com/TIY-GVL-FEE-2014-Aug/Notes/master/class-05/package.json > package.json
# Install the packages from package.json
$ npm install
```

```sh
# Save the gulpfile to your project directory
$ curl https://raw.githubusercontent.com/TIY-GVL-FEE-2014-Aug/Notes/master/class-05/gulpfile.js > gulpfile.js
# Watch the current directory for changes and compile them automatically.
$ gulp
```

To exit gulp, type Control-C (the Control key and the C key at the same time).

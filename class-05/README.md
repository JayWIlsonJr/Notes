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

## Nesting

```scss
header {
  ul {
    display: inline-block;

    & li {
      background: green;
    }
  }
}
```

## Mixins

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
```

# Install Sass

```sh
$ npm install -g node-sass
```

# Compile Sass

```sh
$ node-sass main.scss
```

# Install Gulp

```sh
$ npm install -g gulp
```

# Use Gulp

```sh
$ npm install
$ gulp
```

# 09/17/14

## Responsive
[Responsive Development Checklist](http://samkap.github.io/projects/tiy-rwd/)

## Resources
- http://bourbon.io/
- http://neat.bourbon.io/
- http://bitters.bourbon.io/
- http://hammerjs.github.io/
    ```js
    $(document).hammer({}).bind('swipe', function(){
      console.log("Swipe");
    })
    ```
- https://smacss.com

### Getting Bitters to work with tiy-webapp

1. `$ cd app/styles`
2. `$ bitters install`
3. Change the neat-helpers import in app/styles/base/_grid-settings.scss to:

    ```scss
    @import '../../../bower_components/neat/app/assets/stylesheets/neat-helpers';
    ```

4. Uncomment the `@import "grid-settings";` line in app/styles/base/_base.scss.
5. Import the base file after bourbon, but before neat, in app/styles/main.scss.

    ```scss
    @import '../../bower_components/bourbon/dist/bourbon';
    @import 'base/base';
    @import '../../../bower_components/neat/app/assets/stylesheets/neat';
    ```

6. Either add your styles directly in main.scss, or create separate files in app/styles for your modules and import them after neat.

   ```scss
    .hero-unit {
      @include media($medium-screen) {
        @include span-columns(8);
      }
    }
   ```

## Git hooks

To make sure your bower and npm packages are always up to date, you can use the following hooks to run the commands when you checkout or merge a branch.

Create a file .git/hooks/post-checkout
Create a file .git/hooks/post-merge

The contents of both should be:

```sh
#!/bin/sh
[ -f package.json ] && npm install > /dev/null &
[ -f bower.json ] && bower update > /dev/null &
```

Then run the following commands:

```sh
$ chmod 755 .git/hooks/post-checkout
$ chmod 755 .git/hooks/post-merge
```

# JSONP

http://jsbin.com/mirox/1/edit

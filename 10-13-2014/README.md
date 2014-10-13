# 10/13/2014

## Ember Review
- Read the [Guides](emberjs.com/guides/)
- http://jsbin.com/tohayi/1/edit
- http://jsbin.com/xigili/3/edit
- http://jsbin.com/rahiya/2/edit

## External Templates

1. Install the template compiler as a development dependency

    ```sh
    $ npm install --save-dev gulp-ember-handlebars
    ```

2. Create a `templates` gulp task

    ```js
    gulp.task('templates', function () {
      return gulp.src('app/templates/**/*.hbs')
        .pipe($.emberHandlebars({
          outputType: 'browser'
         }))
        .pipe(gulp.dest('.tmp/templates'));
    });
    ```

3. Update your watch task to watch the templates for changes

    ```js
   gulp.task('watch', ['connect', 'serve'], function () {
      $.livereload.listen();

      gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*',
        'app/templates/*.hbs'  // <~~~~~~~~~~~~~~~~~~~~~~~~~~~  ADD THIS
      ]).on('change', $.livereload.changed);

      gulp.watch('app/templates/*.hbs', ['templates']); // <~~~ AND THIS
      gulp.watch('app/styles/**/*.scss', ['styles']);
      gulp.watch('bower.json', ['wiredep']);
    });
    ```

4. Update your `serve` and `build` tasks to build the templates

    ```js
    gulp.task('serve', ['connect', 'templates', 'styles'], function () {
      require('opn')('http://localhost:9000');
    });

    // ...

    gulp.task('build', ['html', 'templates', 'images', 'extras'], function () {
      return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
    });
    ```

5. Add your templates to their own `.hbs` files in `app/templates`. The template name will be based on the file name. Use folders for nested templates.

    `app/templates/application.hbs`

    ```hbs
    <div class="hero-unit">
      <h1>Tooter</h1>
      <h2>A really cool social network</h2>
      {{outlet}}
    </div>
    ```

    `app/templates/toots/index.hbs`

    ```hbs
    <!-- This will become the toots/index template for the TootsIndexRoute -->
    <ul>
    {{#each}}
      <li>{{text}}</li>
    {{/each}}
    </ul>
    ```

6. Link to the template in your HTML **using the `.js` extension**.

    ```html
    <!-- build:js js/templates.js -->
    <script src="templates/application.js"></script>
    <script src="templates/toots/index.js"></script>
    <!-- endbuild -->
    ```

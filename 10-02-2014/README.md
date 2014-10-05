# 10/02/2014

## Single Responsibility Principle
Any given object in your application should one and only one responsibility.

If you ask the question "What does this object do?" and your answer has the words "and" or "or", you're probably violating the SRP.

## Firebase
1. Install it with:
    ```sh
    $ bower install --save backfire
    ```
2. Include firebase.js and backbone-firebase.js in your index.html (if you're not using wiredeps)
3. Use `Backbone.Firebase.Collection` for your collection constructor, and give it a `firebase` property of your app url.

    ```js
    var TodoList = Backbone.Firebase.Collection.extend({
      model: Todo,
      firebase: "https://<your-firebase>.firebaseio.com"
    });
    ```

4. If you're modifying the models directly (like in the library app), you'll probably also need to link your model constructor to firebase.
    ```js
    var Todo = Backbone.Model.extend({
      firebase: "https://<your-firebase>.firebaseio.com"
    })
    ```

See https://github.com/firebase/backfire for more info

## Backbone stuff

We continued to work on the library app, see [yesterday's notes](../10-01-2014/).

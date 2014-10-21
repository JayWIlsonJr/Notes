# 10/21/2014

## Firebase Authorization / Security

### Resources
- https://www.firebase.com/docs/web/guide/understanding-security.html
- https://www.firebase.com/docs/security/guide/index.html
- https://www.firebase.com/docs/security/api/

### Example

```js
{
  "rules": {
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid"
      }
    },

    "batchmaker": {
      "recipes": {
        "$recipe_id": {
           ".read": "auth.uid === data.child('author').val() || data.child('isPublic').val() === true",
           ".write": "auth.uid === data.child('author').val()"
        }
      }
    }
  }
}
```

## Ember + Firebase Authentication Example

```js
App.LoginController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    logIn: function(){
      var credentials = this.getProperties('email', 'password');
      this.get('controllers.session').authenticate(credentials);
    }
  }
});

App.UsersCreateController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    createUser: function(){
      var credentials = this.getProperties('email', 'password');
      var self = this;
      App.ref.createUser(credentials, function(error){
        if( ! error ){
          self.get('controllers.session').authenticate(credentials).then(function(authData){
            var user = self.store.createRecord('user', {
              id: authData.uid,
              email: credentials.email
            });
            user.save();
          });
        }
      });
    }
  }
});

App.SessionController = Ember.Controller.extend({
  currentUser: null,
  authenticate: function(credentials){
    return new Ember.RSVP.Promise(function(resolve, reject){
      App.ref.authWithPassword(credentials, function(error, authData){
        resolve(authData);
      });
    })
  }
});
```

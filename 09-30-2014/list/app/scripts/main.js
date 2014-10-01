/* global App */
(function(){
  'use strict';

  window.App = {};
  App.Views = {};
  App.Models = {};

  App.Models.Todo = Backbone.Model.extend({

  });

  App.Views.ListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list-view',

    render: function(){
      $('body').append(this.el);
    }
  });

  App.Views.ItemView = Backbone.View.extend({
    render: function(){
      $('.list-view').append('<li>'+this.model.get('title')+'</li>');
    }
  })

})();

$(document).ready(function(){
  var listView = new App.Views.ListView();
  listView.render();
});

$(document).on('keyup', 'input', function(e){
  if(e.which === 13){
    var val = $(this).val();
    var todo = new App.Models.Todo({title: val});
    var itemView = new App.Views.ItemView({model: todo});
    itemView.render();
  }
})

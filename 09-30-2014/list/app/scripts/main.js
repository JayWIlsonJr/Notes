(function(){
  'use strict';

  window.App = {};
  App.Views = {};

  App.Views.ListView = Backbone.View.extend({
    initialize: function(){
      $('body').append(this.el);
      this.filteredList = this.collection;
    },

    render: function(){
      this.$el.empty();
      var self = this;
      _.each(this.filteredList, function(item){
        self.$el.append('<li>'+item+'</li>');
      });
    },

    filterBy: function(val){
      this.filteredList = this.collection.filter(function(item){
         return item.match(val);
      });
      this.render();
    }
  });
})();

$(document).ready(function(){
   var collection = ["Cool", "Rad", "Excellent"];
   App.listView = new App.Views.ListView({collection: collection});
   App.listView.render();
});

$('input[type=search]').on('input', function(){
  var val = $(this).val();
  App.listView.filterBy(val);
})

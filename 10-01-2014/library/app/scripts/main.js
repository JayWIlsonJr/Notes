var CreateBookView = Backbone.View.extend({
  tagName: "input",
  className: "create-book",
  attributes: {
    type: "text"
  },

  events: {
    'keyup': 'addToLibrary'
  },

  addToLibrary: function(event){
    if(event.keyCode === 13){
       $('.library-list').append('<li>' + this.$el.val() + '</li>');
    }
  },

  render: function(){
    $('.jumbotron').prepend(this.el);
  }
})

$(document).ready(function(){
   var createBookView = new CreateBookView();
   createBookView.render();
});

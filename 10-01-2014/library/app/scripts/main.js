/* global Backbone, _, $ */
'use strict';

var Book = Backbone.Model.extend({
  defaults: {
    title: "",
    author: "",
    isCheckedOut: false
  },
  firebase: new Backbone.Firebase("https://blistering-torch-3318.firebaseio.com/books")
});

var BookCollection = Backbone.Firebase.Collection.extend({
  model: Book,
  firebase: "https://blistering-torch-3318.firebaseio.com/books" + Date.now()
});

var BookView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<input type="checkbox"><%= author %>: <%= title %><button>X</button>'),

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  events: {
    'change': 'toggleCheckedOut',
    'click button': 'destroyBook'
  },

  destroyBook: function(){
    console.log(this.model);
    this.model.destroy();
  },

  toggleCheckedOut: function(e){
    var isChecked = $(e.target).is(':checked');
    this.model.set('isCheckedOut', isChecked);
    this.model.save();
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    if(this.model.get('isCheckedOut')) {
      this.$('input').attr('checked', 'checked');
    }
  }
});

var LibraryListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'library-list',
  initialize: function(options){
    options = options || {};
    this.$container = options.$container;

    // Append/prepend to parent container
    this.$container.append(this.el);

    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.renderChild);
  },

  render: function(){
    this.$el.empty();
    this.collection.each(_.bind(this.renderChild, this));
  },

  renderChild: function(book){
    var bookView = new BookView({ model: book });
    bookView.render();
    // this is doing the same thing as $container.append inside the view
    this.$el.append(bookView.el);
  }
});

var CreateBookView = Backbone.View.extend({
  template: _.template( $('#templates-create-book').text() ),
  className: "create-book",
  attributes: {
    type: "text"
  },

  events: {
    'keyup': 'addToLibrary'
  },

  addToLibrary: function(event){
    if(event.keyCode === 13){
      var title = this.$('.title').val();
      var author = this.$('.author').val();
      var book = this.collection.create({title: title, author: author});
    }
  },

  render: function(){
    this.$el.html(this.template());
    $('.jumbotron').prepend(this.el);
  }
});

var BookSummaryView = Backbone.View.extend({
  initialize: function(){
    $('.jumbotron').append(this.el);
    this.listenTo(this.collection, 'add remove', function(){
      this.render();
    });
  },

  render: function(){
    this.$el.html('<h2>' + this.collection.length + '</h2>');
  }
})

$(document).ready(function(){
  window.books = new BookCollection();

  var createBookView = new CreateBookView({collection: books});
  createBookView.render();

  var libraryListView = new LibraryListView({
    $container: $('.jumbotron'),
    collection: books
  });

  var summaryView = new BookSummaryView({collection: books});
  summaryView.render();
});

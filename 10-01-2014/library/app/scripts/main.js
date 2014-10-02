/* global Backbone, _, $ */
'use strict';

var Book = Backbone.Model.extend({});

var BookCollection = Backbone.Collection.extend({
  model: Book
});

var BookView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<input type="checkbox"><%= title %>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
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

    this.listenTo(this.collection, 'add', function(book){
      var bookView = new BookView({ model: book });
      bookView.render();
      // this is doing the same thing as $container.append inside the view
      this.$el.append(bookView.el);
    });
  }
});

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
      var book = this.collection.add({title: this.$el.val()});
    }
  },

  render: function(){
    $('.jumbotron').prepend(this.el);
  }
});

var BookSummaryView = Backbone.View.extend({
  initialize: function(){
    $('.jumbotron').append(this.el);
    this.listenTo(this.collection, 'add', function(){
      this.render();
    });
  },

  render: function(){
    this.$el.html('<h2>' + this.collection.length + '</h2>');
  }
})

$(document).ready(function(){
  var books = new BookCollection();

  var createBookView = new CreateBookView({collection: books});
  createBookView.render();

  var libraryListView = new LibraryListView({
    $container: $('.jumbotron'),
    collection: books
  });

  var summaryView = new BookSummaryView({collection: books});
  summaryView.render();
});

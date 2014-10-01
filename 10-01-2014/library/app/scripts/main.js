var Book = Backbone.Model.extend({});

var BookCollection = Backbone.Collection.extend({
  model: Book
});

var LibraryListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'library-list',
  initialize: function(){
    // Append/prepend to parent container
    $('.jumbotron').append(this.el);

    this.listenTo(this.collection, 'add', function(book){
      this.$el.append('<li>' + book.get('title') + '</li>');
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

  var libraryListView = new LibraryListView({collection: books});

  var summaryView = new BookSummaryView({collection: books});
  summaryView.render();
});

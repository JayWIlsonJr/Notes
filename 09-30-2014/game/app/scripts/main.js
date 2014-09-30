(function(){
  window.App = {};
  App.Views = {};
  App.Views.PlayerView = Backbone.View.extend({
    className: 'player-view',

    events: {
      'click': 'addDate'
    },

    initialize: function(options){
      options = options || {};
      this.$container = options.$container;
      this.$container.html(this.el);
      this.listenTo(this.model, 'change', this.render);
    },

    addDate: function(){
      this.model.set('date', new Date());
    },

    render: function(){
      this.$el.empty();
      this.$el.append('<h1>'+this.model.get('name')+'</h1>');
      this.$el.append('<h2>'+this.model.get('date')+'</h2');
    }
  });


  App.Models = {};
  App.Models.Player = Backbone.Model.extend({
    defaults: {
      name: "Nameless Hero",
      health: 1.0
    }
  });

})();

$(document).ready(function(){
  window.player = new App.Models.Player({name: "Jake"});
  var playerView = new App.Views.PlayerView({
    model: player,
    $container: $('body')
  });
  playerView.render();
});

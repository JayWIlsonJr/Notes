(function(){
  'use strict';

  describe("PlayerView", function(){
    describe("render", function(){
      it("should add the view to the DOM", function(){
        var containerDiv = $('<div>');
        var playerView = new App.Views.PlayerView({$container: containerDiv});
        playerView.render();
        expect(containerDiv.find('.player-view').length).equal(1);
      });
    })
  });
})();

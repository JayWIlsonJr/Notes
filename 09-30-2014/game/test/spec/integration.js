/* global describe, it */

(function () {
  'use strict';

  describe("On page load", function(){
    describe("UserView", function(){
      it("should exist in the DOM", function(done){
        $(document).ready(function(){
          expect($('.player-view').length).to.equal(1);
          done();
        });
      });
    });

    describe("Initial Gameplay", function(){
      it("should have the right layout", function(){
        expect($('.enemy-container')).to.be.ok;
        expect($('.player-container button:contains("Fight")').length).to.equal(1);
      })

      it("should start the game when I press 'Fight'", function(){
        expect($(':contains("Battle Log"):parent').html().match("You were dealt")).to.not.be.ok;
        expect($(':contains("Battle Log"):parent').html().match("You caused")).to.not.be.ok;
        $('button:contains("Fight")').click();
        expect($(':contains("Battle Log"):parent').html().match("You were dealt")).to.be.ok;
        expect($(':contains("Battle Log"):parent').html().match("You caused")).to.be.ok;
      })
    })
  });
})();

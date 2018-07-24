var mainmenuState = {
  create: function() {
    var style = {
      font: "bold 32px Arial",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };

    //  The Text is positioned at 0, 100
    text = this.game.add.text(0, 0, "<< NEW GAME >>", style);
    
    // x, y, width, height
    text.setTextBounds(0, 100, 800, 100);
    
    // text click event
    text.inputEnabled = true;
    text.events.onInputDown.add(function() {
      this.game.state.start('level1');
    }, this)
  }
};

game.state.add('mainmenu', mainmenuState);

var game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    game.load.image('star', 'assets/star.png');
}

// Any variables that we want to use in both create() and update()
// have to be declared outside of both functions.
var player;
var star;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 250, 'dude');
    star = game.add.sprite(200, 200, 'star');
    game.physics.arcade.enable(star);
    game.physics.arcade.enable(player);
}

function update() {
    game.physics.arcade.moveToObject(player, star, 300);
    game.physics.arcade.moveToPointer(star, 400);
    
}

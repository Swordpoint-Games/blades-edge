// Just to see how to import objects as example
//import PhaserLogo from '../objects/phaserLogo'
//import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  map
  cursors
  helpTextplayer
  joyStick
  showDebug
  currentTileset

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {
    this.load.image('tiles', 'assets/tilemaps/tiles/pokemon_tileset_32.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/json/start.json');
    this.load.spritesheet('player', 'assets/sprites/spaceman.png', {frameWidth: 16, frameHeight: 16});
  }

  create() {
    // Keeping as example
    //this.fpsText = new FpsText(this)
    this.map = this.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32 });
    var tileset = this.map.addTilesetImage('pokemon_tileset_32', 'tiles');

    var bottomLayer = this.map.createStaticLayer("bottom", tileset, 0, 0);
    var belowLayer = this.map.createStaticLayer("below", tileset, 0, 0);
    var worldLayer = this.map.createStaticLayer("world", tileset, 0, 0);
    var aboveLayer = this.map.createStaticLayer("above", tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });
    aboveLayer.setDepth(10);

    // Color the collision tiles
    worldLayer.renderDebug(this.add.graphics().setAlpha(0.75), {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
   
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 8, end: 9 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 1, end: 2 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player', { start: 11, end: 13 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
        frameRate: 10,
        repeat: -1
    });

    this.player = this.physics.add.sprite(100, 100, 'player', 1).setScale(2);
    
    this.physics.add.collider(this.player, worldLayer);

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();

    // Create Joystick
    this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
        x: 200,
        y: this.sys.game.canvas.height - 200,
        radius: 100,
        base: this.add.circle(0, 0, 100, 0x888888),
        thumb: this.add.circle(0, 0, 50, 0xcccccc),
        
    });

    this.scale.on('resize', this.resize, this);
  }

  update(time, delta) {
    this.joyStick.setVisible(this.game.isTouch);

    this.player.body.setVelocity(0);

    var cursorKeys = this.joyStick.createCursorKeys();

    if (this.cursors.left.isDown || cursorKeys.left.isDown) {
        this.player.body.setVelocityX(-200);
    }
    else if (this.cursors.right.isDown || cursorKeys.right.isDown) {
        this.player.body.setVelocityX(200);
    }

    if(this.cursors.up.isDown || cursorKeys.up.isDown) {
        this.player.body.setVelocityY(-200);
    }
    else if (this.cursors.down.isDown || cursorKeys.down.isDown)
    {
        this.player.body.setVelocityY(200);
    }
    if (this.cursors.left.isDown || cursorKeys.left.isDown)
    {
        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown || cursorKeys.right.isDown)
    {
        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown || cursorKeys.up.isDown)
    {
        this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown || cursorKeys.down.isDown)
    {
        this.player.anims.play('down', true);
    }
    else
    {
        this.player.anims.stop();
    }
  }

  resize(gameSize) {
    this.joyStick.setPosition(200, gameSize.height - 200);
  }

}

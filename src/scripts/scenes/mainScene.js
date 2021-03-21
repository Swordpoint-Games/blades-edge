import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText
  map
  cursors
  debugGraphics
  helpTextplayer
  joyStick
  showDebug
  currentTileset

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this)
    this.map = this.make.tilemap({key: 'map', tileWidth: 32, tileWidth: 32 });
    var tileset = this.map.addTilesetImage('pokemon_tileset_32', 'tiles');

    var bottomLayer = this.map.createStaticLayer("bottom", tileset, 0, 0);
    var belowLayer = this.map.createStaticLayer("below", tileset, 0, 0);
    var worldLayer = this.map.createStaticLayer("world", tileset, 0, 0);
    var aboveLayer = this.map.createStaticLayer("above", tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });
    aboveLayer.setDepth(10);
    const debugGraphics = this.add.graphics().setAlpha(0.75);
    worldLayer.renderDebug(debugGraphics, {
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

    this.player = this.physics.add.sprite(100, 100, 'player', 1)
        .setScale(2);
    
    this.physics.add.collider(this.player, worldLayer);

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player);

    this.debugGraphics = this.add.graphics();

    this.input.keyboard.on('down_67', function (event){
        this.showDebug = !this.showDebug;
        this.drawDebug();
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.helpText = this.add.text(16, 16, '', {
        fontSize: '20px',
        fill: '#ffffff'
    });
    this.helpText.setScrollFactor(0);
    this.updateHelpText();


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

  updateHelpText() {
    this.helpText.setText (
      'Arrow keys to move.'
    );  
  }

  update(time, delta) {
    this.fpsText.update()

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

  drawDebug () {
    this.debugGraphics.clear();

    if (this.showDebug) {
        this.map.renderDebug(this.debugGraphics, {
            tileColor: null, // Non-colliding tiles
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
            faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges
        });
    }  

    this.updateHelpText();
  } 

}

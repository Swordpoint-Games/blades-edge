import 'phaser'
import '@babel/polyfill'

import PreloadScene from './scenes/preloadScene'
import MainScene from './scenes/mainScene'

const config = {
  title: "Blade's Edge",
  type: Phaser.AUTO,
  backgroundColor: '#2d2d2d',
  disableContextMenu: true,
  pixelArt: true,
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },  
  physics: {
    default: 'arcade',
  },
  scene: [PreloadScene, MainScene],
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
  game.isTouch = false;
  window.addEventListener('touchstart', function() {			
    game.isTouch = true;
  });
})

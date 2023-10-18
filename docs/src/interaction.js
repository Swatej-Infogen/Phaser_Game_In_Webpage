import Phaser, { Game, Scene } from 'phaser';

class InteractionExample extends Phaser.Scene {
  constructor() {
    //super(scene);
  }

  preload() {
    this.load.image('tile', '../dist/assets/tile.png');
    this.load.image('grass', '../dist/assets/grass1.png');
    this.load.image('stone', '../dist/assets/stone.png');
    this.load.image('T_chest', '../dist/assets/T_chest.png');

    this.load.image('flare', '../dist/assets/white-flare.png');
  }

  create() {
    this.tileGroup = this.add.group();

    //this.iso.projector.origin.setTo(0.5, 0.3);

    // Add some tiles to our scene
    this.spawnTiles();
  }

  spawnTiles() {
    const self = this;
    const tilePositions = [];
  
    for (let xx = 0; xx < 250; xx +=50) {
      for (let yy = 0; yy < 250; yy += 50) {
        tilePositions.push({ x: xx + (xx * 0.1), y: yy + (yy * 0.1)});
      }
    }
  
    // Shuffle the array of tile positions (Fisher-Yates shuffle)
    for (let i = tilePositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tilePositions[i], tilePositions[j]] = [tilePositions[j], tilePositions[i]];
    }
  
    for (let i = 0; i < 10; i++) {
      const { x, y } = tilePositions[i];
      const tile = this.add.sprite(x, y, 0, 'grass', this.tileGroup);
      tile.setInteractive();
      const stone = this.add.sprite(x, y, 0, 'stone', this.tileGroup); // Assuming 'stone' is the key for your stone image
      stone.setInteractive()
           .setOrigin(0.6,0.7);

      
  
      stone.on('pointerover', function () {
        this.setTint(0x86bfda);
        //this.isoZ += 5;
      });
  
      stone.on('pointerout', function () {
        this.clearTint();
        //this.isoZ -= 5;
      });
  
      stone.on('pointerdown', function (pointer) {
        console.log("Pointer Down on Stone");
        console.log("The value of stone's X is :: " + (stone.x));
        console.log("The value of stone's Y is :: " + (stone.y));
        const emitter = self.add.particles(stone.x, stone.y - 50, 'flare', {
          speed: 24,
          lifespan: 1500,
          quantity: 10,
          scale: { start: 0.05, end: 0 },
          emitting: false,
          // emitZone: { type: 'edge', source: stone.getBounds(), quantity: 42 },
          duration: 500
        });
        emitter.start(2000);
      });
    }
  
    // Create grass tiles for the remaining positions
    for (let i = 10; i < tilePositions.length; i++) {
      const { x, y } = tilePositions[i];
      const tile = this.add.sprite(x, y, 0, 'grass', this.tileGroup);
      tile.setInteractive();
  
      tile.on('pointerover', function () {
        this.setTint(0x86bfda);
        // this.isoZ += 5;
      });
  
      tile.on('pointerout', function () {
        this.clearTint();
        // this.isoZ -= 5;
      });
  
      tile.on('pointerdown', function () {
        console.log("Pointer Down");
      });
    }
  }

}




  


let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  scene: InteractionExample
};

new Game(config);

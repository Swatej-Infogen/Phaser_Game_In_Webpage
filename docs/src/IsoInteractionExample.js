import Phaser, { Game, Scene } from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';

class IsoInteractionExample extends Phaser.Scene {
  constructor() {
  
    const sceneConfig = {
      key: 'IsoInteractionExample',
      mapAdd: { isoPlugin: 'iso' }
    };
    
    super(sceneConfig);

    this.tilePositions = [];
    this.crystalCount = 0;
    this.fill1;
    this.fill2;
    this.Score ;
    this.dialogueContainer = null;
    this.restartButton ;
    
  }

  preload() {
 

    const loadingBar = this.add.graphics();
    loadingBar.fillStyle(0xffffff, 1);
    loadingBar.fillRect(100, 200, 400, 100);

    this.load.on('progress', (value) => {
      loadingBar.clear();
      loadingBar.fillStyle(0xffde00, 1);
      loadingBar.fillRect(
        100 + 32,
        200 + 10,
        (400 - 32 * 2) * value,
        10
      );
    });

    this.load.on('complete' , () => { 
      loadingBar.destroy();
    })
    

    this.load.image('grass', '../dist/assets/grass_3.png');
    this.load.image('stone', '../dist/assets/stone.png');
    this.load.image('T_chest', '../dist/assets/T_chest.png');
    this.load.image('crystal', '../dist/assets/crystal1.png');
    this.load.image('flare', '../dist/assets/white-flare.png');
    this.load.image('restartButton', '../dist/assets/restartButton.png');

    this.load.atlas('progressBar', '../dist/assets/nine-slice.png', '../dist/assets/nine-slice.json');

    this.load.image('dialogue_box' , '../dist/assets/msg_box.png');

    this.load.scenePlugin({
      key: 'IsoPlugin',
      url: IsoPlugin,
      sceneKey: 'iso'
    });
  }
  create() {
    this.isoGroup = this.add.group();

    this.iso.projector.origin.setTo(0.5, 0.3);

    // Add some tiles to our scene
    // this.spawnTiles();
    this.setUpTilePositions();
    this.createGrassTile();
    this.createStone();
    this.createTChest();
    this.createCrystal();


    this.progressBar();

    this.Score =  this.add.text(20, 50 , 'Score :: 0' , {
      fontFamily : 'Arial' , 
      fontSize : 20 , 
      color : '#ffffff'
      }).setOrigin(0,0.5);
  
    this.restartGame();

    
  }

  setUpTilePositions(){
    this.tilePositions = [];
  
    for (let xx = 0; xx < 250; xx += 50) {
      for (let yy = 0; yy < 250; yy+= 50) {
        this.tilePositions.push({ x: xx + (xx * 0.1), y: yy + (yy * 0.1)});
      }
    }
  
    // Shuffle the array of tile positions (Fisher-Yates shuffle)
    for (let i = this.tilePositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.tilePositions[i], this.tilePositions[j]] = [this.tilePositions[j], this.tilePositions[i]];
    }

    return this.tilePositions;
  }

  createStone(){
    for (let i = 0; i < 5; i++) {
      const { x, y } = this.tilePositions[i];
      const grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setInteractive();
      //this.tileInteraction(grass);
      const stone = this.add.isoSprite(x, y, 0, 'stone', this.isoGroup).setOrigin(); // Assuming 'stone' is the key for your stone image
    
      this.tileInteraction(stone);
    }
  }

  createCrystal(){
    for (let i = 5; i <9; i++) {
      const { x, y } = this.tilePositions[i];
      const grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setInteractive();
      const crystal = this.add.isoSprite(x, y, 0, 'crystal', this.isoGroup).setOrigin(); // Assuming 'stone' is the key for your stone image
      crystal.setName('correct');
      this.tileInteraction(crystal);
    }
  }

  createTChest(){
    for (let i = 9; i < 10; i++) {
      const { x, y } = this.tilePositions[i];
      const grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setInteractive();
      const T_chest = this.add.isoSprite(x, y, 0, 'T_chest', this.isoGroup); // Assuming 'stone' is the key for your stone image
      T_chest.setName('correct');

      this.tileInteraction(T_chest);
    }
  }

  createGrassTile(){
    for (let i = 5; i < this.tilePositions.length; i++) {
      const { x, y } = this.tilePositions[i];
      const grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setName("gass");
  
      this.tileInteraction(grass);
    }
  }

  tileInteraction(tilekey){
    const self = this;

    tilekey.setInteractive();

    tilekey.on('pointerover', function () {
      if(tilekey.name !== 'gass'){
        this.isoZ += 5;
      }
      this.setTint(0x86bfda);
 
    });

    tilekey.on('pointerout', function () {
    if(tilekey.name !== 'gass'){
      this.isoZ -= 5;
    }
    this.clearTint();
    });

    tilekey.on('pointerdown', function (pointer) {


      self.checkIfCorrect(tilekey);
      //console.log("Crystal Count :: " + self.crystalCount);
      self.scoreUI();
          
    });

    return tilekey
  }

  checkIfCorrect(tilekey){
    const self = this;
    if(tilekey.name === 'correct'){
      console.log("Correct option clicked");
      self.crystalCount++;
      console.log("Crystal Count :: " + self.crystalCount);

      self.particleEffect(tilekey);
      tilekey.setVisible(false);

      this.progressbarIncrement(self.crystalCount);
      
      this.showDialogueBox("You found a crystal!");

      setTimeout(() => {
        self.hideDialogueBox();
      }, 1000);

      setTimeout(() => {
        self.gameWin();
      }, 1000);
    }
  }

  progressBar(){
    const progressBar = this.add.nineslice(400,50,'progressBar' , 'ButtonOrange').setScale(0.5);
    this.fill1 = this.add.nineslice(343, 49, 'progressBar', 'ButtonOrangeFill1', 10, 39, 3, );
    this.fill1.setOrigin(0, 0.5).setScale(0.5);
  }

  progressbarIncrement(count){
    const self = this;
    console.log("Called , Count = " + count);
    this.tweens.add({
        targets: self.fill1,
        width: 228/5 * count,
        duration: 500,

    });
  }

  scoreUI(){
   this.Score.setText('Score :: ' + this.crystalCount * 10);
   console.log("Score = " + this.Score.text); 
  }

  showDialogueBox(text) {
    console.log("Show msg box");

    if (this.dialogueContainer) {
      this.dialogueContainer.destroy(); // Destroy any existing dialogue container
    }
  
 
    this.dialogueContainer = this.add.container(250, 400);
  
    const dialogueBox = this.add.image(0, 0, 'dialogue_box');
    this.dialogueContainer.add(dialogueBox);
  

    const dialogueText = this.add.text(-50 , -10, text, {
      fontFamily: 'Arial',
      fontSize: 15,
      color: '#000000',
      align: 'center',
      wordWrap:  { width: dialogueBox.displayWidth - 50 },
    });
    this.dialogueContainer.add(dialogueText);

  }
  
  hideDialogueBox() {
    console.log("Hide msg box");

    if (this.dialogueContainer) {
      this.dialogueContainer.destroy();
      this.dialogueContainer = null;
    }
  }

  gameWin(){
    if(this.crystalCount == 5){
      console.log("You Won....");
      window.location.href = "../pages/congratulation.html" ;
    }
  }

  restartGame(){
    this.restartButton = this.add.image(450 , 400 , 'restartButton').setInteractive();

    this.restartButton.on('pointerdown' , () => {
      this.crystalCount = 0;
      this.scene.restart('IsoInteractionExample')
    })
  }

  particleEffect(tilekey){

    const emitter = this.add.particles(tilekey.x, tilekey.y - 50, 'flare', {
      speed: 24,
      lifespan: 1500,
      quantity: 10,
      scale: { start: 0.05, end: 0 },
      emitting: false,
      // emitZone: { type: 'edge', source: stone.getBounds(), quantity: 42 },
      duration: 500
    }).setParticleTint(0xFFFF00);
    emitter.start(2000);
  }
  

}

let config = {
  type: Phaser.AUTO,
  width: 550,
  height: 460,
  pixelArt: true,
  backgroundColor: '#000000',

  scale: {
    mode: Phaser.Scale.FIT ,
    autoCenter: Phaser.Scale.NONE
},

  scene: IsoInteractionExample
};

const game = new Phaser.Game(config);

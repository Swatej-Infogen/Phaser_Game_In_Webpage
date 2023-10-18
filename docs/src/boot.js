import Phaser from "phaser";

class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "Boot"
    });
  }

  preload() {
   
    this.load.image("loadingBar", "../dist/assets/loadingBarD.png");
  }

  create() {
    this.scene.start("IsoInteractionExample");
    this.scene.stop();
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
  
    scene: [Boot ,IsoInteractionExample]
  };
  
  new Game(config);

export default Boot;

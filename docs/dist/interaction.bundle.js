/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"interaction": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/phaser3-plugin-isometric/dist";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/IsoInteractionExample.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/IsoInteractionExample.js":
/*!**************************************!*\
  !*** ./src/IsoInteractionExample.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n\nvar _phaser2 = _interopRequireDefault(_phaser);\n\nvar _phaser3PluginIsometric = __webpack_require__(/*! phaser3-plugin-isometric */ \"./node_modules/phaser3-plugin-isometric/dist/phaser-plugin-isometric.js\");\n\nvar _phaser3PluginIsometric2 = _interopRequireDefault(_phaser3PluginIsometric);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar IsoInteractionExample = function (_Phaser$Scene) {\n  _inherits(IsoInteractionExample, _Phaser$Scene);\n\n  function IsoInteractionExample() {\n    _classCallCheck(this, IsoInteractionExample);\n\n    var sceneConfig = {\n      key: 'IsoInteractionExample',\n      mapAdd: { isoPlugin: 'iso' }\n    };\n\n    var _this = _possibleConstructorReturn(this, (IsoInteractionExample.__proto__ || Object.getPrototypeOf(IsoInteractionExample)).call(this, sceneConfig));\n\n    _this.tilePositions = [];\n    _this.crystalCount = 0;\n    _this.fill1;\n    _this.fill2;\n    _this.Score;\n    _this.dialogueContainer = null;\n    _this.restartButton;\n\n    return _this;\n  }\n\n  _createClass(IsoInteractionExample, [{\n    key: 'preload',\n    value: function preload() {\n\n      var loadingBar = this.add.graphics();\n      loadingBar.fillStyle(0xffffff, 1);\n      loadingBar.fillRect(100, 200, 400, 100);\n\n      this.load.on('progress', function (value) {\n        loadingBar.clear();\n        loadingBar.fillStyle(0xffde00, 1);\n        loadingBar.fillRect(100 + 32, 200 + 10, (400 - 32 * 2) * value, 10);\n      });\n\n      this.load.on('complete', function () {\n        loadingBar.destroy();\n      });\n\n      this.load.image('grass', '../dist/assets/grass_3.png');\n      this.load.image('stone', '../dist/assets/stone.png');\n      this.load.image('T_chest', '../dist/assets/T_chest.png');\n      this.load.image('crystal', '../dist/assets/crystal1.png');\n      this.load.image('flare', '../dist/assets/white-flare.png');\n      this.load.image('restartButton', '../dist/assets/restartButton.png');\n\n      this.load.atlas('progressBar', '../dist/assets/nine-slice.png', '../dist/assets/nine-slice.json');\n\n      this.load.image('dialogue_box', '../dist/assets/msg_box.png');\n\n      // for (var i = 0; i < 200; i++) {\n      //   this.load.image('logo'+i, '../dist/assets/stone.png');\n      // }\n\n      this.load.scenePlugin({\n        key: 'IsoPlugin',\n        url: _phaser3PluginIsometric2.default,\n        sceneKey: 'iso'\n      });\n    }\n  }, {\n    key: 'create',\n    value: function create() {\n      this.isoGroup = this.add.group();\n\n      this.iso.projector.origin.setTo(0.5, 0.3);\n\n      // Add some tiles to our scene\n      // this.spawnTiles();\n      this.setUpTilePositions();\n      this.createGrassTile();\n      this.createStone();\n      this.createTChest();\n      this.createCrystal();\n\n      this.progressBar();\n\n      this.Score = this.add.text(20, 50, 'Score :: 0', {\n        fontFamily: 'Arial',\n        fontSize: 20,\n        color: '#ffffff'\n      }).setOrigin(0, 0.5);\n\n      this.restartGame();\n    }\n  }, {\n    key: 'setUpTilePositions',\n    value: function setUpTilePositions() {\n      this.tilePositions = [];\n\n      for (var xx = 0; xx < 250; xx += 50) {\n        for (var yy = 0; yy < 250; yy += 50) {\n          this.tilePositions.push({ x: xx + xx * 0.1, y: yy + yy * 0.1 });\n        }\n      }\n\n      // Shuffle the array of tile positions (Fisher-Yates shuffle)\n      for (var i = this.tilePositions.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [this.tilePositions[j], this.tilePositions[i]];\n        this.tilePositions[i] = _ref[0];\n        this.tilePositions[j] = _ref[1];\n      }\n\n      return this.tilePositions;\n    }\n  }, {\n    key: 'createStone',\n    value: function createStone() {\n      for (var i = 0; i < 5; i++) {\n        var _tilePositions$i = this.tilePositions[i],\n            x = _tilePositions$i.x,\n            y = _tilePositions$i.y;\n\n        var grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setInteractive();\n        //this.tileInteraction(grass);\n        var stone = this.add.isoSprite(x, y, 0, 'stone', this.isoGroup).setOrigin(); // Assuming 'stone' is the key for your stone image\n\n        this.tileInteraction(stone);\n      }\n    }\n  }, {\n    key: 'createCrystal',\n    value: function createCrystal() {\n      for (var i = 5; i < 9; i++) {\n        var _tilePositions$i2 = this.tilePositions[i],\n            x = _tilePositions$i2.x,\n            y = _tilePositions$i2.y;\n\n        var grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setInteractive();\n        var crystal = this.add.isoSprite(x, y, 0, 'crystal', this.isoGroup).setOrigin(); // Assuming 'stone' is the key for your stone image\n        crystal.setName('correct');\n        this.tileInteraction(crystal);\n      }\n    }\n  }, {\n    key: 'createTChest',\n    value: function createTChest() {\n      for (var i = 9; i < 10; i++) {\n        var _tilePositions$i3 = this.tilePositions[i],\n            x = _tilePositions$i3.x,\n            y = _tilePositions$i3.y;\n\n        var grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setInteractive();\n        var T_chest = this.add.isoSprite(x, y, 0, 'T_chest', this.isoGroup); // Assuming 'stone' is the key for your stone image\n        T_chest.setName('correct');\n\n        this.tileInteraction(T_chest);\n      }\n    }\n  }, {\n    key: 'createGrassTile',\n    value: function createGrassTile() {\n      for (var i = 5; i < this.tilePositions.length; i++) {\n        var _tilePositions$i4 = this.tilePositions[i],\n            x = _tilePositions$i4.x,\n            y = _tilePositions$i4.y;\n\n        var grass = this.add.isoSprite(x, y, 0, 'grass', this.isoGroup).setName(\"gass\");\n\n        this.tileInteraction(grass);\n      }\n    }\n  }, {\n    key: 'tileInteraction',\n    value: function tileInteraction(tilekey) {\n      var self = this;\n\n      tilekey.setInteractive();\n\n      tilekey.on('pointerover', function () {\n        if (tilekey.name !== 'gass') {\n          this.isoZ += 5;\n        }\n        this.setTint(0x86bfda);\n      });\n\n      tilekey.on('pointerout', function () {\n        if (tilekey.name !== 'gass') {\n          this.isoZ -= 5;\n        }\n        this.clearTint();\n      });\n\n      tilekey.on('pointerdown', function (pointer) {\n\n        self.checkIfCorrect(tilekey);\n        //console.log(\"Crystal Count :: \" + self.crystalCount);\n        self.scoreUI();\n      });\n\n      return tilekey;\n    }\n  }, {\n    key: 'checkIfCorrect',\n    value: function checkIfCorrect(tilekey) {\n      var self = this;\n      if (tilekey.name === 'correct') {\n        console.log(\"Correct option clicked\");\n        self.crystalCount++;\n        console.log(\"Crystal Count :: \" + self.crystalCount);\n\n        self.particleEffect(tilekey);\n        tilekey.setVisible(false);\n\n        this.progressbarIncrement(self.crystalCount);\n\n        this.showDialogueBox(\"You found a crystal!\");\n\n        setTimeout(function () {\n          self.hideDialogueBox();\n        }, 1000);\n\n        setTimeout(function () {\n          self.gameWin();\n        }, 1000);\n      }\n    }\n  }, {\n    key: 'progressBar',\n    value: function progressBar() {\n      var progressBar = this.add.nineslice(400, 50, 'progressBar', 'ButtonOrange').setScale(0.5);\n      this.fill1 = this.add.nineslice(343, 49, 'progressBar', 'ButtonOrangeFill1', 10, 39, 3);\n      this.fill1.setOrigin(0, 0.5).setScale(0.5);\n    }\n  }, {\n    key: 'progressbarIncrement',\n    value: function progressbarIncrement(count) {\n      var self = this;\n      console.log(\"Called , Count = \" + count);\n      this.tweens.add({\n        targets: self.fill1,\n        width: 228 / 5 * count,\n        duration: 500\n\n      });\n    }\n  }, {\n    key: 'scoreUI',\n    value: function scoreUI() {\n      this.Score.setText('Score :: ' + this.crystalCount * 10);\n      console.log(\"Score = \" + this.Score.text);\n    }\n  }, {\n    key: 'showDialogueBox',\n    value: function showDialogueBox(text) {\n      console.log(\"Show msg box\");\n\n      if (this.dialogueContainer) {\n        this.dialogueContainer.destroy(); // Destroy any existing dialogue container\n      }\n\n      this.dialogueContainer = this.add.container(250, 400);\n\n      var dialogueBox = this.add.image(0, 0, 'dialogue_box');\n      this.dialogueContainer.add(dialogueBox);\n\n      var dialogueText = this.add.text(-50, -10, text, {\n        fontFamily: 'Arial',\n        fontSize: 15,\n        color: '#000000',\n        align: 'center',\n        wordWrap: { width: dialogueBox.displayWidth - 50 }\n      });\n      this.dialogueContainer.add(dialogueText);\n    }\n  }, {\n    key: 'hideDialogueBox',\n    value: function hideDialogueBox() {\n      console.log(\"Hide msg box\");\n\n      if (this.dialogueContainer) {\n        this.dialogueContainer.destroy();\n        this.dialogueContainer = null;\n      }\n    }\n  }, {\n    key: 'gameWin',\n    value: function gameWin() {\n      if (this.crystalCount == 5) {\n        console.log(\"You Won....\");\n        window.location.href = \"../pages/congratulation.html\";\n      }\n    }\n  }, {\n    key: 'restartGame',\n    value: function restartGame() {\n      var _this2 = this;\n\n      this.restartButton = this.add.image(450, 400, 'restartButton').setInteractive();\n\n      this.restartButton.on('pointerdown', function () {\n        _this2.crystalCount = 0;\n        _this2.scene.restart('IsoInteractionExample');\n      });\n    }\n  }, {\n    key: 'particleEffect',\n    value: function particleEffect(tilekey) {\n\n      var emitter = this.add.particles(tilekey.x, tilekey.y - 50, 'flare', {\n        speed: 24,\n        lifespan: 1500,\n        quantity: 10,\n        scale: { start: 0.05, end: 0 },\n        emitting: false,\n        // emitZone: { type: 'edge', source: stone.getBounds(), quantity: 42 },\n        duration: 500\n      }).setParticleTint(0xFFFF00);\n      emitter.start(2000);\n    }\n  }]);\n\n  return IsoInteractionExample;\n}(_phaser2.default.Scene);\n\nvar config = {\n  type: _phaser2.default.AUTO,\n  width: 550,\n  height: 460,\n  pixelArt: true,\n  backgroundColor: '#000000',\n\n  scale: {\n    mode: _phaser2.default.Scale.FIT,\n    autoCenter: _phaser2.default.Scale.NONE\n  },\n\n  scene: IsoInteractionExample\n};\n\nnew _phaser.Game(config);\n\n//# sourceURL=webpack:///./src/IsoInteractionExample.js?");

/***/ })

/******/ });
import BootScene from "./scenes/BootScene.js";
import LevelSelection from "./scenes/LevelSelection.js";
import Level1 from "./scenes/level1.js";
import Level2 from "./scenes/level2.js";
import Level3 from "./scenes/level3.js";
import Level4 from "./scenes/level4.js";
import Level5 from "./scenes/level5.js";




console.log("aperto main")

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight * 1.1;

//livelli bloccati
localStorage.setItem('level2unlocked', false);
localStorage.setItem('level3unlocked', false);
localStorage.setItem('level4unlocked', false);
localStorage.setItem('level5unlocked', false);



const config = {
    type: Phaser.AUTO,
    width:screenWidth,
    height:screenHeight,
    scene: [BootScene, LevelSelection, Level1, Level2, Level3, Level4, Level5],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug:false,
        }
    }
};


const game = new Phaser.Game(config);



export function changeToLevelSelection() {
    game.scene.start('LevelSelection');
}

export function changeToLevel1() {
    game.scene.start('Level1');
}

export function changeToLevel2() {
    game.scene.start('Level2');
}

export function changeToLevel3() {
    game.scene.start('Level3');
}

export function changeToLevel4() {
    game.scene.start('Level4');
}

export function changeToLevel5() {
    game.scene.start('Level5');
}


game.scene.start('LevelSelection');

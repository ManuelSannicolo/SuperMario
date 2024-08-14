import BootScene from "./scenes/BootScene.js";
import LevelSelection from "./scenes/LevelSelection.js";
import Level1 from "./scenes/Level1.js";
import Level2 from "./scenes/Level2.js";
import Level3 from "./scenes/Level3.js";
import Level4 from "./scenes/Level4.js";
import Level5 from "./scenes/Level5.js";




console.log("aperto main")

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight * 1.1;

//livelli bloccati
// if (localStorage.getItem('level2unlocked') === null) 
    localStorage.setItem('level2unlocked', true);

// if (localStorage.getItem('level3unlocked') === null) 
    localStorage.setItem('level3unlocked', true);

// if (localStorage.getItem('level4unlocked') === null) 
    localStorage.setItem('level4unlocked', true);

// if (localStorage.getItem('level5unlocked') === null) 
    localStorage.setItem('level5unlocked', true);

// if (localStorage.getItem('victory') === null) 
localStorage.setItem('victory', true);

if (localStorage.getItem('score') === null) 
    localStorage.setItem('score', 0);


const aspectRatio = 1.859;
const defaultWidth = 800; // Larghezza iniziale
const defaultHeight = defaultWidth / aspectRatio




const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#000000',
    width: 1536, 
    height: 826, 
    scene: [BootScene, LevelSelection, Level1, Level2, Level3, Level4, Level5],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug:false,
        }
    },
  

};


const game = new Phaser.Game(config);




export function changeToHomepage() {
    console.log(game.scene.getScenes(true)); // Mostra le scene attive
    game.scene.start('LevelSelection');
    console.log("cambiato");

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


// modify/delete to start from level selection
// game.scene.start('Level1');


export function levelCompletion(scene, level, score) {

    switch(level){
        case 1: localStorage.setItem("level2unlocked", true); break;
        case 2: localStorage.setItem("level3unlocked", true); break;
        case 3: localStorage.setItem("level4unlocked", true); break;
        case 4: localStorage.setItem("level5unlocked", true); break;
        // case 5
        default: console.log("error"); break;
    }

    var currentTotalScore = localStorage.getItem("score");
    var finalScore = parseInt(currentTotalScore) + score;
    localStorage.setItem("score", finalScore);
    
    const overlay = document.getElementById('complete_overlay');
    const levelText = document.getElementById('complete_text');
    const scoreText = document.getElementById('complete_score');

    levelText.textContent = `Hai superato il livello ${level}`;
    scoreText.textContent = `Score: ${score}`;

    overlay.style.opacity = 1;
    overlay.style.pointerEvents = 'auto'; 

    
    setTimeout(() => {
        overlay.style.opacity = 0;
        overlay.style.pointerEvents = 'none';

        scene.scene.start('LevelSelection');
    }, 4000);
    


}


export function addScore (scene, score) {
    scene.score += score;
    scene.scoreText.setText("score: " + scene.score);
    scene.scoreText.setColor('#11ee11');
    setInterval(() => {
        scene.scoreText.setColor('#f0f0f0');
    }, 500)
}

console.log(window.innerWidth, window.innerHeight)












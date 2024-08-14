import { createEntities, resetEntities } from "./entities.js";
import { resetPlatforms } from "./createPlatforms.js";


export function player_movement(player, cursors, scene) {
    // Movimento laterale
    const velocityX = window.innerWidth / 1;
    const velocityY = window.innerHeight / 1.18;

    if (cursors.left.isDown) {

        player.setVelocityX(-velocityX);
        player.anims.play('run', true);
        player.flipX = true;

    } else if (cursors.right.isDown) {

        player.setVelocityX(velocityX);
        player.anims.play('run', true);
        player.flipX = false;

    } else {

        player.setVelocityX(0);
        player.anims.play('idle'); 

    }

    // Salto
    if (cursors.jump.isDown && player.body.touching.down) {

        player.setVelocityY(-velocityY);
        player.anims.play('jump');

    }else if(player.body.touching.down && !cursors.left.isDown && !cursors.right.isDown){  

        player.anims.play('idle');

    }


    if (cursors.fireball.isDown){
        createFireball(player, scene)
    }
    
}


var lastFired = 0;
function createFireball(player, scene){

    const currentTime = scene.time.now;
    const cooldown = 10000;

    if (currentTime < lastFired + cooldown) return;

    lastFired = currentTime;

    
    console.log("fired");

    let fireball = scene.physics.add.sprite(player.getBounds().x + (player.width * 1.15), player.getBounds().y + (player.height / 1.25), 'fireball').setScale(4);

    //direction of the ball is determined by the player's direction
    fireball.setVelocityX(player.flipX ? -400 : 400);
    fireball.setVelocityY(0);


    scene.physics.add.collider(fireball, scene.platforms);
    scene.physics.add.collider(fireball, scene.goombas.getChildren());

}




//update
export function deathByFalling(scene,player){

    var death = false;
    const deathHeight = scene.scale.height * 1.05 ;
    if (player.y > deathHeight) {
        generalDeath(scene, player)
    }


    return death;
}

 //update
export function deathByTubes(scene, player){
    var death = false;
    const deathHeight = scene.scale.height * 1.05 ;
    if (player.y > deathHeight) {
        generalDeath(scene, player)
        death =  true;
    }

    return death;
}

export function generalDeath(scene, player){

    player.anims.play('hurt', true);
    resetScores(scene);
    scene.scene.pause();
    setTimeout(() => {
        resetPlatforms(scene, player);
        resetEntities(scene);
        respawnPlayer(player, scene);
    }, 1500)
    
}

function respawnPlayer(player, scene){

    scene.scene.resume();
    player.anims.play('idle', true);

    const xSpawn = window.innerWidth * 0.03;
    const ySpawn = window.innerHeight * 0.5;

    player.setPosition(xSpawn, ySpawn);
}

function resetScores(scene){
    scene.death++;
    scene.score = 0;
    lastFired = 0; //reset fireball cooldown
    scene.deathsText.setText("deaths: " + scene.death);
    scene.deathsText.setColor('#ee1111');
    scene.scoreText.setText("score: " + scene.score);
    setInterval(() => {
        scene.deathsText.setColor('#f0f0f0');
    }, 2000)
    
}


export function checkTubeCollision(player, tubes, scene) {
    tubes.children.iterate(function(tube) {
        const playerBottom = player.body.bottom;
        const playerLeft = player.body.left;
        const playerRight = player.body.right;
        const tubeTop = tube.body.top;
        const tubeLeft = tube.body.left;
        const tubeRight = tube.body.right;


        if (playerBottom == tubeTop && playerRight > tubeLeft && playerLeft < tubeRight) 
            generalDeath(scene, player);
        
    });

}



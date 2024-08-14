import { generalDeath } from "./player_action.js";
import { addScore } from "./main.js";
export function createEntities(scene, key, width, height, player, distance, platforms){
    const screenWidth = scene.scale.width;
    const screenHeight = scene.scale.height * 1.1;
    const width_game = screenWidth * 5;
    
    //create variable for each scene => checking update
    scene.goombas = scene.physics.add.group();


    for(let i = 0; i < height.length; i++){
        const currentX = width[i] * width_game;
        const currentY = height[i] * screenHeight;
        const entity = scene.goombas.create(currentX, currentY, key).setScale(2.5);
        entity.play(key === 'goomba' ? 'goomba-idle' : 'goomba-underground-idle');

        scene.physics.add.collider(entity, platforms);
        scene.physics.add.collider(player, entity, (player, entity) => {
            checkCollision(player, entity, scene);
        });

        entity_movement(entity, distance[i], key, player, scene);
    }


}

function entity_movement(entity, distance, key, player, scene){
    const initialX = entity.x;
    const distance_pixel = distance * 32;
    const velocityX = window.innerWidth / 30;
    let right = true;

    entity.play(key === 'goomba' ? 'goomba-walk' : 'goomba-underground-walk')

    entity.update = function(){
        if(right){
            entity.flipX = false;
            entity.setVelocityX (velocityX);
            if(entity.x >= initialX + distance_pixel){
                right = false;
                entity.x = initialX + distance_pixel;
            }
        }else {
            entity.flipX = true;
            entity.setVelocityX (-velocityX);
            if(entity.x <= initialX - distance_pixel){
                right = true;
                entity.x = initialX - distance_pixel;
            }
        }


        //check collision with player
        // checkCollision(player, entity, scene);
        
    }


}

function checkCollision(player, entity, scene){

    const playerBottom = player.body.bottom;
    const playerLeft = player.body.left;
    const playerRight = player.body.right;
    const entityTop = entity.body.top;
    const entityLeft = entity.body.left;
    const entityRight = entity.body.right;

    console.log(scene) //debug

    if (playerRight === entityLeft || playerLeft === entityRight )
        generalDeath(scene, player);
    else if (playerBottom === entityTop)
        killEntity(entity, scene)
        
}

function killEntity(entity, scene){
    addScore(scene, 100);
    entity.anims.play('goomba-hurt', true);
    entity.setVelocityX(0);
    entity.setVelocityY(0);

    setTimeout(() => {
        entity.destroy();
    }, 500);


}


export function resetEntities(scene) {
    scene.goombas.clear(true, true); 
    createEntities(scene, 'goomba', scene.entities[0].width, scene.entities[0].height, scene.player, scene.entities[0].distance, scene.allPlatforms);
}

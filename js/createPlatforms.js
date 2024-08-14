import { addScore } from "./main.js";


export function createHolesGround(scene, platforms){
    const screenWidth = scene.scale.width * 5;
    const screenHeight = scene.scale.height * 1.1
    const times = Math.floor(screenWidth / 128);
    const sceneKey = scene.scene.key;
    const type = sceneKey  === "Level1"  || sceneKey  === "Level2"  || sceneKey  === "Level4"  ? 'floorbricks' : 'floorbricks_underground'
    for ( let i = 0; i<times; i++){
        if(!scene.holesGround.includes(i)){
            const platform0 = platforms.create(i * 128 + 64, screenHeight - (44.6 * 0.23), type).setScale(2);
            const platform1 = platforms.create(i * 128 + 64, screenHeight - (44.6 * 1.65), type).setScale(2);
            const platform2 = platforms.create(i * 128 + 64, screenHeight - (44.6 * 3.07), type).setScale(2);

            platform0.body.updateFromGameObject();
            platform1.body.updateFromGameObject();
            platform2.body.updateFromGameObject();

        }else
            i+=3
    } 
}
export function createPlatforms(player, scene, height, percentage, type, conclusion, platforms){
        // console.log("entrato nella funzione");

        //platforms


        //platforms start at 19% screenWidth*5

        //const heights
        const screenWidth = scene.scale.width;
        const screenHeight = scene.scale.height * 1.1;
        const width_game = screenWidth * 5;

        const block_dimension = 32;
        
        const heigth_current = screenHeight - (44.6 * 3.07) - block_dimension * height - block_dimension * 1.5;

        //create mysteryBlock variable

 


        for (let i = 0 ; i < percentage.length; i++){
            // console.log("entrato nel ciclo")

            var currentPercentage = percentage[i];
            var currentType = type[i];

            if(currentPercentage > 1 || currentPercentage < 1 ){ //se il numero è superiore a 1, significa che quel blocco va ripetuto tante volte quanto lo è la parte intera;
                                        // la parte decimale indica la posizione d'inizio della sequenza; se il numero è negativo, la percentuale indicata è quella finale

                var abs = Math.abs(Math.trunc(currentPercentage))
                var timeRipetition = abs;
                var start = currentPercentage > 1 ? currentPercentage - abs : Math.abs(currentPercentage + abs);

                for (let j = 0; j< timeRipetition; j++){
                    var  x =  currentPercentage > 1 ? Math.round((start * width_game + block_dimension * j) / block_dimension ) * block_dimension - block_dimension/2 :
                                                      Math.round((start * width_game - block_dimension * j) / block_dimension ) * block_dimension + block_dimension/2;

                    // console.log(currentPercentage < 0 ? start: "0");
                    platforms.create(x, heigth_current, currentType).setScale(2).refreshBody();
                }

            }
            
            var currentX = Math.round((currentPercentage * width_game) / block_dimension ) * block_dimension - block_dimension/2;


            //animate mysteryblock

            if (currentType === 'misteryBlock' || currentType === 'misteryBlock_underground') {
                //create the mysteryBlock
                const block = scene.mysteryBlock.create(currentX, heigth_current, currentType).setScale(2).refreshBody().setImmovable(true);

                block.anims.play(currentType === 'misteryBlock' ? 'mistery-block-default' : 'mistery-block-underground', false);
                block.isMysteryBlock = true;
                block.isActivated = false;
                platforms.add(block);                
            }else 
                platforms.create(currentX, heigth_current, currentType).setScale(2).refreshBody();

        }

        if(conclusion){

            var start = Math.round((percentage[percentage.length - 1] * width_game) / block_dimension ) * block_dimension - block_dimension/2;

            for(let i = start; i < width_game; i += block_dimension){

                platforms.create(i, heigth_current, currentType).setScale(2).refreshBody();

            } 

        }
        


        return platforms

}


export function createDecoration(key, height, width, scale, scene, type){


    const screenWidth = scene.scale.width;
    const screenHeight = scene.scale.height * 1.1;
    const width_game = screenWidth * 5;


    for(let i = 0; i < height.length; i++){
        var currentX = width[i] * width_game;
        var currentY = height[i] * screenHeight;
        var currentScale = scale[i];
        scene.add.image(currentX, currentY, key).setScale(currentScale).setTint(type === 1 ? 0x296B7A : 0xFFFFFF).setDepth(0);
    }

    

}


export function createTubes(player, key, scene, percentage, type){
    const screenWidth = scene.scale.width;
    const screenHeight = scene.scale.height * 1.1;
    const width_game = screenWidth * 5;

    const height1 = (1 - 187 / (screenHeight/1.15)) * screenHeight ;
    const height2 = (1 - 175 / (screenHeight/1.15)) * screenHeight
    const tubes = scene.physics.add.staticGroup();
    scene.physics.add.collider(player, tubes);


    for(let i = 0; i < percentage.length; i++){
        var currentX = percentage[i] * width_game;
        const tube = tubes.create(currentX, key === "pipe1" ? height1 : height2, key).setScale(2).setTint(type === 1 ? 0x296B7A : 0xFFFFFF).setDepth(1000);

    }

    tubes.isTube = true;

    return tubes

}




export function checkCollision_mysteryBlock(player, block, scene) {
    if (player.body.top === block.body.bottom) {
        // Calcola l'intersezione tra il giocatore e il blocco
        let overlapX = player.body.x < block.body.x + block.body.width && player.body.x + player.body.width > block.body.x;
        if (overlapX) {
            coinHandle(player, block, scene);
        }
    }


}


function coinHandle(player, block, scene){
    console.log("coin handle");

    let coin = scene.physics.add.sprite(block.getBounds().x, block.getBounds().y - 50, 'coin').setScale(3).setDepth(2000);
    coin.anims.play('coin-default', true);

    block.anims.stop(); //stop the animation thus it's possible to change the texture
    block.setTexture('emptyBlock');
    block.isActivated = true;

    addScore(scene, 200);


}



export function resetPlatforms(scene){
    scene.allPlatforms.clear(true, true);
    var resetPlatforms = scene.physics.add.staticGroup();
    scene.physics.add.collider(scene.player, resetPlatforms);
    createHolesGround(scene, resetPlatforms);
    scene.levelData.forEach(data =>{
        resetPlatforms = createPlatforms(scene.player, scene, data.height, data.percentages, data.types, data.conclusion, resetPlatforms);
    })
    scene.allPlatforms = resetPlatforms;
}







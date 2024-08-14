
export function loadResources(scene) {
        switch(scene.scene.key){
            case 'BootScene': //boot
                // Caricamento delle risorse
                scene.load.image("block", "elements/blocks/overworld/block.png");
                scene.load.spritesheet("brickDebris", "elements/blocks/overworld/brick-debris.png",{
                    frameWidth: 8,
                    frameHeight: 8,});
                scene.load.spritesheet("customBlock", "elements/blocks/overworld/customBlock.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.image("emptyBlock", "elements/blocks/overworld/emptyBlock.png");
                scene.load.image("immovableBlock", "elements/blocks/overworld/immovableBlock.png");
                scene.load.spritesheet("misteryBlock", "elements/blocks/overworld/misteryBlock.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });

                //block underground
                scene.load.image("block_underground", "elements/blocks/underground/block.png");
                scene.load.spritesheet("brickDebris_underground", "elements/blocks/underground/brick-debris.png",{
                    frameWidth: 8,
                    frameHeight: 8,
                });
                scene.load.image("block2_underground", "elements/blocks/underground/block2.png");
                scene.load.image("emptyBlock_underground", "elements/blocks/underground/emptyBlock.png");
                scene.load.image("immovableBlock_underground", "elements/blocks/underground/immovableBlock.png");
                scene.load.spritesheet("misteryBlock_underground", "elements/blocks/underground/misteryBlock.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });

                //collectibles 
                scene.load.spritesheet("fire_flower", "elements/collectibles/overworld/fire-flower.png",{
                    frameWidth: 16,
                    frameHeight: 16,});
                scene.load.spritesheet("fire_flower_underground", "elements/collectibles/underground/fire-flower.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.spritesheet("ground_coin", "elements/collectibles/underground/ground-coin.png",{
                    frameWidth: 10,
                    frameHeight: 14,
                });
                scene.load.spritesheet("coin", "elements/collectibles/coin.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.image("live_mushroom", "elements/collectibles/live-mushroom.png");
                scene.load.image("super_mushroom", "elements/collectibles/super-mushroom.png");

                //entities
                scene.load.spritesheet("goomba", "elements/entities/overworld/goomba.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });

                scene.load.spritesheet("goomba_underGround", "elements/entities/underground/goomba.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });

                scene.load.spritesheet("fireball_explosion", "elements/entities/fireball-explosion.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });

                scene.load.spritesheet("fireball", "elements/entities/fireball.png", {
                    frameWidth: 8,
                    frameHeight: 8,
                });

                scene.load.spritesheet("koopa", "elements/entities/koopa.png", {
                    frameWidth: 16,
                    frameHeight: 24,
                });

                scene.load.spritesheet("mario_fire", "elements/entities/mario-fire.png", {
                    frameWidth: 18,
                    frameHeight: 32,
                });

                scene.load.spritesheet("mario_grown", "elements/entities/mario-grown.png", {
                    frameWidth: 18,
                    frameHeight: 32,
                });

                scene.load.spritesheet("mario", "elements/entities/mario.png", {
                    frameWidth: 18,
                    frameHeight: 16,
                });

                scene.load.spritesheet("shell", "elements/entities/shell.png", {
                    frameWidth: 16,
                    frameHeight: 15,
                });

                //scenery
                scene.load.image("bush1", "elements/scenery/overworld/bush1.png");
                scene.load.image("bush2", "elements/scenery/overworld/bush2.png");
                scene.load.image("cloud1", "elements/scenery/overworld/cloud1.png");
                scene.load.image("cloud2", "elements/scenery/overworld/cloud2.png");
                scene.load.image("fence", "elements/scenery/overworld/fence.png");
                scene.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
                scene.load.image("mountain1", "elements/scenery/overworld/mountain1.png");
                scene.load.image("mountain2", "elements/scenery/overworld/mountain2.png");

                scene.load.image("floorbricks_underground", "elements/scenery/underground/floorbricks.png");

                scene.load.image("castle", "elements/scenery/castle.png");
                scene.load.image("final_flag", "elements/scenery/final-flag.png");
                scene.load.image("flag_mast", "elements/scenery/flag-mast.png");
                scene.load.image("tube_horizontal_final", "elements/scenery/horizontal-final-tube.png");
                scene.load.image("tube_horizontal", "elements/scenery/horizontal-tube.png");
                scene.load.image("pipe1", "elements/scenery/pipe1.png");
                scene.load.image("pipe2", "elements/scenery/pipe2.png");
                scene.load.image("tube_vertical_large", "elements/scenery/vertical-large-tube.png");
                scene.load.image("tube_vertical_final_large", "elements/scenery/vertical-large-tube.png.png");
                scene.load.image("tube_vertical_medium", "elements/scenery/vertical-medium-tube.png");
                scene.load.image("tube_vertical_small", "elements/scenery/vertical-small-tube.png");
                scene.load.image("sign", "elements/scenery/sign.png");
            break;

            case 'LevelSelection': //LevelSelection
                scene.load.image("block", "elements/blocks/overworld/block.png");
                scene.load.image("block_underground", "elements/blocks/underground/block.png");

                scene.load.image("bush1", "elements/scenery/overworld/bush1.png");
                scene.load.image("bush2", "elements/scenery/overworld/bush2.png");
                scene.load.image("cloud1", "elements/scenery/overworld/cloud1.png");
                scene.load.image("cloud2", "elements/scenery/overworld/cloud2.png");
                scene.load.image("fence", "elements/scenery/overworld/fence.png");
                scene.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
                scene.load.image("mountain1", "elements/scenery/overworld/mountain1.png");
                scene.load.image("mountain2", "elements/scenery/overworld/mountain2.png");

                scene.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
                break;

            case 'Level1':
            case 'Level2':
            case 'Level5': //overworld
                // Caricamento delle risorse
                scene.load.image("block", "elements/blocks/overworld/block.png");
                scene.load.spritesheet("brickDebris", "elements/blocks/overworld/brick-debris.png",{
                    frameWidth: 8,
                    frameHeight: 8,});
                scene.load.spritesheet("customBlock", "elements/blocks/overworld/customBlock.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.image("emptyBlock", "elements/blocks/overworld/emptyBlock.png");
                scene.load.image("immovableBlock", "elements/blocks/overworld/immovableBlock.png");
                scene.load.spritesheet("misteryBlock", "elements/blocks/overworld/misteryBlock.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });

                //collectibles 
                scene.load.spritesheet("fire_flower", "elements/collectibles/overworld/fire-flower.png",{
                    frameWidth: 16,
                    frameHeight: 16,});


                scene.load.spritesheet("coin", "elements/collectibles/coin.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.image("live_mushroom", "elements/collectibles/live-mushroom.png");
                scene.load.image("super_mushroom", "elements/collectibles/super-mushroom.png");

                //entities
                scene.load.spritesheet("goomba", "elements/entities/overworld/goomba.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });


                scene.load.spritesheet("fireball_explosion", "elements/entities/fireball-explosion.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });

                scene.load.spritesheet("fireball", "elements/entities/fireball.png", {
                    frameWidth: 8,
                    frameHeight: 8,
                });

                scene.load.spritesheet("koopa", "elements/entities/koopa.png", {
                    frameWidth: 16,
                    frameHeight: 24,
                });

                scene.load.spritesheet("mario_fire", "elements/entities/mario-fire.png", {
                    frameWidth: 18,
                    frameHeight: 32,
                });

                scene.load.spritesheet("mario_grown", "elements/entities/mario-grown.png", {
                    frameWidth: 18,
                    frameHeight: 32,
                });

                scene.load.spritesheet("mario", "elements/entities/mario.png", {
                    frameWidth: 18,
                    frameHeight: 16,
                });

                scene.load.spritesheet("shell", "elements/entities/shell.png", {
                    frameWidth: 16,
                    frameHeight: 15,
                });

                //scenery
                scene.load.image("bush1", "elements/scenery/overworld/bush1.png");
                scene.load.image("bush2", "elements/scenery/overworld/bush2.png");
                scene.load.image("cloud1", "elements/scenery/overworld/cloud1.png");
                scene.load.image("cloud2", "elements/scenery/overworld/cloud2.png");
                scene.load.image("fence", "elements/scenery/overworld/fence.png");
                scene.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
                scene.load.image("mountain1", "elements/scenery/overworld/mountain1.png");
                scene.load.image("mountain2", "elements/scenery/overworld/mountain2.png");


                scene.load.image("castle", "elements/scenery/castle.png");
                scene.load.image("final_flag", "elements/scenery/final-flag.png");
                scene.load.image("flag_mast", "elements/scenery/flag-mast.png");
                scene.load.image("tube_horizontal_final", "elements/scenery/horizontal-final-tube.png");
                scene.load.image("tube_horizontal", "elements/scenery/horizontal-tube.png");
                scene.load.image("pipe1", "elements/scenery/pipe1.png");
                scene.load.image("pipe2", "elements/scenery/pipe2.png");
                scene.load.image("tube_vertical_large", "elements/scenery/vertical-large-tube.png");
                scene.load.image("tube_vertical_final_large", "elements/scenery/vertical-large-tube.png.png");
                scene.load.image("tube_vertical_medium", "elements/scenery/vertical-medium-tube.png");
                scene.load.image("tube_vertical_small", "elements/scenery/vertical-small-tube.png");
                scene.load.image("sign", "elements/scenery/sign.png");
                break;

            case 'Level3':
            case 'Level4': //underground
                //block underground
                scene.load.image("block_underground", "elements/blocks/underground/block.png");
                scene.load.spritesheet("brickDebris_underground", "elements/blocks/underground/brick-debris.png",{
                    frameWidth: 8,
                    frameHeight: 8,
                });
                scene.load.image("block2_underground", "elements/blocks/underground/block2.png");
                scene.load.image("emptyBlock_underground", "elements/blocks/underground/emptyBlock.png");
                scene.load.image("immovableBlock_underground", "elements/blocks/underground/immovableBlock.png");
                scene.load.spritesheet("misteryBlock_underground", "elements/blocks/underground/misteryBlock.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });

                //collectibles 
                scene.load.spritesheet("fire_flower_underground", "elements/collectibles/underground/fire-flower.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.spritesheet("ground_coin", "elements/collectibles/underground/ground-coin.png",{
                    frameWidth: 10,
                    frameHeight: 14,
                });
                scene.load.spritesheet("coin", "elements/collectibles/coin.png",{
                    frameWidth: 16,
                    frameHeight: 16,
                });
                scene.load.image("live_mushroom", "elements/collectibles/live-mushroom.png");
                scene.load.image("super_mushroom", "elements/collectibles/super-mushroom.png");

                //entities


                scene.load.spritesheet("goomba_underGround", "elements/entities/underground/goomba.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });

                scene.load.spritesheet("fireball_explosion", "elements/entities/fireball-explosion.png", {
                    frameWidth: 16,
                    frameHeight: 16,
                });

                scene.load.spritesheet("fireball", "elements/entities/fireball.png", {
                    frameWidth: 8,
                    frameHeight: 8,
                });

                scene.load.spritesheet("koopa", "elements/entities/koopa.png", {
                    frameWidth: 16,
                    frameHeight: 24,
                });

                scene.load.spritesheet("mario_fire", "elements/entities/mario-fire.png", {
                    frameWidth: 18,
                    frameHeight: 32,
                });

                scene.load.spritesheet("mario_grown", "elements/entities/mario-grown.png", {
                    frameWidth: 18,
                    frameHeight: 32,
                });

                scene.load.spritesheet("mario", "elements/entities/mario.png", {
                    frameWidth: 18,
                    frameHeight: 16,
                });

                scene.load.spritesheet("shell", "elements/entities/shell.png", {
                    frameWidth: 16,
                    frameHeight: 15,
                });


                scene.load.image("floorbricks_underground", "elements/scenery/underground/floorbricks.png");

                scene.load.image("castle", "elements/scenery/castle.png");
                scene.load.image("final_flag", "elements/scenery/final-flag.png");
                scene.load.image("flag_mast", "elements/scenery/flag-mast.png");
                scene.load.image("tube_horizontal_final", "elements/scenery/horizontal-final-tube.png");
                scene.load.image("tube_horizontal", "elements/scenery/horizontal-tube.png");
                scene.load.image("pipe1", "elements/scenery/pipe1.png");
                scene.load.image("pipe2", "elements/scenery/pipe2.png");
                scene.load.image("tube_vertical_large", "elements/scenery/vertical-large-tube.png");
                scene.load.image("tube_vertical_final_large", "elements/scenery/vertical-large-tube.png.png");
                scene.load.image("tube_vertical_medium", "elements/scenery/vertical-medium-tube.png");
                scene.load.image("tube_vertical_small", "elements/scenery/vertical-small-tube.png");
                scene.load.image("sign", "elements/scenery/sign.png");
                break;

            default:
                scene.load.image("block", "elements/blocks/overworld/block.png");
                scene.load.image("block_underground", "elements/blocks/underground/block.png");

                scene.load.image("bush1", "elements/scenery/overworld/bush1.png");
                scene.load.image("bush2", "elements/scenery/overworld/bush2.png");
                scene.load.image("cloud1", "elements/scenery/overworld/cloud1.png");
                scene.load.image("cloud2", "elements/scenery/overworld/cloud2.png");
                scene.load.image("fence", "elements/scenery/overworld/fence.png");
                scene.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
                scene.load.image("mountain1", "elements/scenery/overworld/mountain1.png");
                scene.load.image("mountain2", "elements/scenery/overworld/mountain2.png");

                scene.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
                break;
        }


} 

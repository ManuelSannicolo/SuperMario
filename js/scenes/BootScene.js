export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Caricamento delle risorse
        this.load.image("block", "elements/blocks/overworld/block.png");
        this.load.image("brickDebris", "elements/blocks/overworld/brick-debris.png");
        this.load.image("customBlock", "elements/blocks/overworld/customBlock.png");
        this.load.image("emptyBlock", "elements/blocks/overworld/emptyBlock.png");
        this.load.image("immovableBlock", "elements/blocks/overworld/immovableBlock.png");
        this.load.image("misteryBlock", "elements/blocks/overworld/misteryBlock.png");

        //block underground
        this.load.image("block_underground", "elements/blocks/underground/block.png");
        this.load.image("brickDebris_underground", "elements/blocks/underground/brick-debris.png");
        this.load.image("block2_underground", "elements/blocks/underground/block2.png");
        this.load.image("emptyBlock_underground", "elements/blocks/underground/emptyBlock.png");
        this.load.image("immovableBlock_underground", "elements/blocks/underground/immovableBlock.png");
        this.load.image("misteryBlock_underground", "elements/blocks/underground/misteryBlock.png");

        //collectibles 
        this.load.image("fire_flower", "elements/collectibles/overworld/fire-flower.png");
        this.load.image("fire_flower_underground", "elements/collectibles/underground/fire-flower.png");
        this.load.image("ground_coin", "elements/collectibles/underground/ground-coin.png");
        this.load.image("coin", "elements/collectibles/coin.png");
        this.load.image("live_mushroom", "elements/collectibles/live-mushroom.png");
        this.load.image("super_mushroom", "elements/collectibles/super-mushroom.png");

        //entities
        this.load.spritesheet("goomba", "elements/entities/overworld/goomba.png", {
            frameWidth: 16,
            frameHeight: 16,
        });

        this.load.spritesheet("goomba_underGround", "elements/entities/underground/goomba.png", {
            frameWidth: 16,
            frameHeight: 16,
        });

        this.load.spritesheet("fireball_explosion", "elements/entities/fireball-explosion.png", {
            frameWidth: 16,
            frameHeight: 16,
        });

        this.load.spritesheet("fireball", "elements/entities/fireball.png", {
            frameWidth: 16,
            frameHeight: 16,
        });

        this.load.spritesheet("koopa", "elements/entities/koopa.png", {
            frameWidth: 16,
            frameHeight: 24,
        });

        this.load.spritesheet("mario_fire", "elements/entities/mario-fire.png", {
            frameWidth: 18,
            frameHeight: 32,
        });

        this.load.spritesheet("mario_grown", "elements/entities/mario-grown.png", {
            frameWidth: 18,
            frameHeight: 32,
        });

        this.load.spritesheet("mario", "elements/entities/mario.png", {
            frameWidth: 18,
            frameHeight: 32,
        });

        this.load.spritesheet("shell", "elements/entities/shell.png", {
            frameWidth: 16,
            frameHeight: 15,
        });

        //scenery
        this.load.image("bush1", "elements/scenery/overworld/bush1.png");
        this.load.image("bush2", "elements/scenery/overworld/bush2.png");
        this.load.image("cloud1", "elements/scenery/overworld/cloud1.png");
        this.load.image("cloud2", "elements/scenery/overworld/cloud2.png");
        this.load.image("fence", "elements/scenery/overworld/fence.png");
        this.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
        this.load.image("mountain1", "elements/scenery/overworld/mountain1.png");
        this.load.image("mountain2", "elements/scenery/overworld/mountain2.png");

        this.load.image("floorbricks_underground", "elements/scenery/underground/floorbricks.png");

        this.load.image("castle", "elements/scenery/castle.png");
        this.load.image("final_flag", "elements/scenery/final-flag.png");
        this.load.image("flag_mast", "elements/scenery/flag-mast.png");
        this.load.image("tube_horizontal_final", "elements/scenery/horizontal-final-tube.png");
        this.load.image("tube_horizontal", "elements/scenery/horizontal-tube.png");
        this.load.image("pipe1", "elements/scenery/pipe1.png");
        this.load.image("pipe2", "elements/scenery/pipe2.png");
        this.load.image("tube_vertical_large", "elements/scenery/vertical-large-tube.png");
        this.load.image("tube_vertical_final_large", "elements/scenery/vertical-large-tube.png.png");
        this.load.image("tube_vertical_medium", "elements/scenery/vertical-medium-tube.png");
        this.load.image("tube_vertical_small", "elements/scenery/vertical-small-tube.png");
        this.load.image("sign", "elements/scenery/sign.png");
    }

    create() {
        console.log("creato Bootscene");
        this.createAnimations();
        this.scene.start("SelectLevel");
    }

    createAnimations() {
        // Mario animations
        this.anims.create({
            key: 'idle',
            frames: [{ key: 'mario', frame: 0 }]
        });
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('mario', { start: 3, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'hurt',
            frames: [{ key: 'mario', frame: 4 }]
        });
        this.anims.create({
            key: 'jump',
            frames: [{ key: 'mario', frame: 5 }]
        });

        // Grown Mario animations
        this.anims.create({
            key: 'grown-mario-idle',
            frames: [{ key: 'mario-grown', frame: 0 }]
        });
        this.anims.create({
            key: 'grown-mario-run',
            frames: this.anims.generateFrameNumbers('mario-grown', { start: 3, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'grown-mario-crouch',
            frames: [{ key: 'mario-grown', frame: 4 }]
        });
        this.anims.create({
            key: 'grown-mario-jump',
            frames: [{ key: 'mario-grown', frame: 5 }]
        });

        // Fire Mario animations
        this.anims.create({
            key: 'fire-mario-idle',
            frames: [{ key: 'mario-fire', frame: 0 }]
        });
        this.anims.create({
            key: 'fire-mario-run',
            frames: this.anims.generateFrameNumbers('mario-fire', { start: 3, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'fire-mario-crouch',
            frames: [{ key: 'mario-fire', frame: 4 }]
        });
        this.anims.create({
            key: 'fire-mario-jump',
            frames: [{ key: 'mario-fire', frame: 5 }]
        });
        this.anims.create({
            key: 'fire-mario-throw',
            frames: [{ key: 'mario-fire', frame: 6 }]
        });

        // Goomba animations
        this.anims.create({
            key: 'goomba-idle',
            frames: [{ key: 'goomba', frame: 1 }]
        });
        this.anims.create({
            key: 'goomba-walk',
            frames: this.anims.generateFrameNumbers('goomba', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'goomba-hurt',
            frames: [{ key: 'goomba', frame: 2 }]
        });

        // koopas animations
        this.anims.create({
            key: 'koopa-idle',
            frames: [{ key: 'koopa', frame: 1 }]
        });
        this.anims.create({
            key: 'koopa-walk',
            frames: this.anims.generateFrameNumbers('koopa', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'koopa-hurt',
            frames: [{ key: 'koopa', frame: 0 }]
        });
        this.anims.create({
            key: 'koopa-shell',
            frames: [{ key: 'koopa', frame: 1 }]
        });

        // Coins
        this.anims.create({
            key: 'coin-default',
            frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        // Ground coin
        this.anims.create({
            key: 'ground-coin-default',
            frames: this.anims.generateFrameNumbers('ground-coin', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        // Mistery blocks
        this.anims.create({
            key: 'mistery-block-default',
            frames: this.anims.generateFrameNumbers('mistery-block', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        // Custom blocks
        this.anims.create({
            key: 'custom-block-default',
            frames: this.anims.generateFrameNumbers('custom-block', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        // Brick debris
        this.anims.create({
            key: 'brick-debris-default',
            frames: this.anims.generateFrameNumbers('brick-debris', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1,
        });

        // Fireflower
        this.anims.create({
            key: 'fire-flower-default',
            frames: this.anims.generateFrameNumbers('fire-flower', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        // Fireball
        this.anims.create({
            key: 'fireball-left-down',
            frames: [{ key: 'fireball', frame: 0 }]
        });
        this.anims.create({
            key: 'fireball-left-up',
            frames: [{ key: 'fireball', frame: 1 }]
        });
        this.anims.create({
            key: 'fireball-right-down',
            frames: [{ key: 'fireball', frame: 2 }]
        });
        this.anims.create({
            key: 'fireball-right-up',
            frames: [{ key: 'fireball', frame: 3 }]
        });

        // Fireball explosion
        this.anims.create({
            key: 'fireball-explosion-1',
            frames: [{ key: 'fireball-explosion', frame: 0 }]
        });
        this.anims.create({
            key: 'fireball-explosion-2',
            frames: [{ key: 'fireball-explosion', frame: 1 }]
        });
        this.anims.create({
            key: 'fireball-explosion-3',
            frames: [{ key: 'fireball-explosion', frame: 2 }]
        });

        // NPC 
        this.anims.create({
            key: 'npc-default',
            frames: this.anims.generateFrameNumbers('npc', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1,
            repeatDelay: 10
        });
    }
}

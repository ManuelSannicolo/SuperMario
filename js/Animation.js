export function createAnimations(scene) {
    
        // Mario animations
        scene.anims.create({
            key: 'idle',
            frames: [{ key: 'mario', frame: 0 }]
        });
        scene.anims.create({
            key: 'run',
            frames: scene.anims.generateFrameNumbers('mario', { start: 3, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        scene.anims.create({
            key: 'hurt',
            frames: [{ key: 'mario', frame: 4 }]
        });
        scene.anims.create({
            key: 'jump',
            frames: [{ key: 'mario', frame: 5 }]
        });

        // Grown Mario animations
        scene.anims.create({
            key: 'grown-mario-idle',
            frames: [{ key: 'mario_grown', frame: 0 }]
        });
        scene.anims.create({
            key: 'grown-mario-run',
            frames: scene.anims.generateFrameNumbers('mario_grown', { start: 3, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        scene.anims.create({
            key: 'grown-mario-crouch',
            frames: [{ key: 'mario_grown', frame: 4 }]
        });
        scene.anims.create({
            key: 'grown-mario-jump',
            frames: [{ key: 'mario_grown', frame: 5 }]
        });

        // Fire Mario animations
        scene.anims.create({
            key: 'fire-mario-idle',
            frames: [{ key: 'mario_fire', frame: 0 }]
        });
        scene.anims.create({
            key: 'fire-mario-run',
            frames: scene.anims.generateFrameNumbers('mario_fire', { start: 3, end: 1 }),
            frameRate: 12,
            repeat: -1
        });
        scene.anims.create({
            key: 'fire-mario-crouch',
            frames: [{ key: 'mario_fire', frame: 4 }]
        });
        scene.anims.create({
            key: 'fire-mario-jump',
            frames: [{ key: 'mario_fire', frame: 5 }]
        });
        scene.anims.create({
            key: 'fire-mario-throw',
            frames: [{ key: 'mario_fire', frame: 6 }]
        });

        // Goomba animations
        scene.anims.create({
            key: 'goomba-idle',
            frames: [{ key: 'goomba', frame: 1 }]
        });
        scene.anims.create({
            key: 'goomba-walk',
            frames: scene.anims.generateFrameNumbers('goomba', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'goomba-hurt',
            frames: [{ key: 'goomba', frame: 2 }]
        });


        scene.anims.create({
            key: 'goomba-underground-idle',
            frames: [{ key: 'goomba_underground', frame: 1 }]
        });
        scene.anims.create({
            key: 'goomba-underground-walk',
            frames: scene.anims.generateFrameNumbers('goomba_underground', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'goomba-underground-hurt',
            frames: [{ key: 'goomba_underground', frame: 2 }]
        });



        // koopas animations
        scene.anims.create({
            key: 'koopa-idle',
            frames: [{ key: 'koopa', frame: 1 }]
        });
        scene.anims.create({
            key: 'koopa-walk',
            frames: scene.anims.generateFrameNumbers('koopa', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'koopa-hurt',
            frames: [{ key: 'koopa', frame: 0 }]
        });
        scene.anims.create({
            key: 'koopa-shell',
            frames: [{ key: 'koopa', frame: 1 }]
        });

        // Coins
        scene.anims.create({
            key: 'coin-default',
            frames: scene.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        // Ground coin
        scene.anims.create({
            key: 'ground-coin-default',
            frames: scene.anims.generateFrameNumbers('ground_coin', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        // Mistery blocks
        scene.anims.create({
            key: 'mistery-block-default',
            frames: scene.anims.generateFrameNumbers('misteryBlock', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        scene.anims.create({
            key: 'mistery-block-underground',
            frames: scene.anims.generateFrameNumbers('misteryBlock_underground', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        // Custom blocks
        scene.anims.create({
            key: 'custom-block-default',
            frames: scene.anims.generateFrameNumbers('customBlock', { start: 2, end: 0 }),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 5
        });

        // Brick debris
        scene.anims.create({
            key: 'brick-debris-default',
            frames: scene.anims.generateFrameNumbers('brickDebris', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1,
        });

        // Fireflower
        scene.anims.create({
            key: 'fire-flower-default',
            frames: scene.anims.generateFrameNumbers('fire_flower', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        // Fireball
        scene.anims.create({
            key: 'fireball-left-down',
            frames: [{ key: 'fireball', frame: 0 }]
        });
        scene.anims.create({
            key: 'fireball-left-up',
            frames: [{ key: 'fireball', frame: 1 }]
        });
        scene.anims.create({
            key: 'fireball-right-down',
            frames: [{ key: 'fireball', frame: 2 }]
        });
        scene.anims.create({
            key: 'fireball-right-up',
            frames: [{ key: 'fireball', frame: 3 }]
        });

        // Fireball explosion
        scene.anims.create({
            key: 'fireball-explosion-1',
            frames: [{ key: 'fireball_explosion', frame: 0 }]
        });
        scene.anims.create({
            key: 'fireball-explosion-2',
            frames: [{ key: 'fireball_explosion', frame: 1 }]
        });
        scene.anims.create({
            key: 'fireball-explosion-3',
            frames: [{ key: 'fireball_explosion', frame: 2 }]
        });

        // NPC 
        scene.anims.create({
            key: 'npc-default',
            frames: scene.anims.generateFrameNumbers('npc', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1,
            repeatDelay: 10
        });
    }

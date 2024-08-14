import { player_movement, deathByFalling, checkTubeCollision } from '../player_action.js';
import { createPlatforms, createDecoration, createTubes, checkCollision_mysteryBlock, createHolesGround } from '../createPlatforms.js';
import { levelCompletion } from '../main.js';

var deaths = 0;
var levelCompleted = false;
export default class Level5 extends Phaser.Scene {
    
    constructor() {
        super("Level5");
    }

    preload(){
        // loadResources(this);
    }

    
    create(){

        const screenWidth = this.scale.width * 5;
        const screenHeight = this.scale.height * 1.1;
        const times = Math.floor(screenWidth / 128);
        const platforms = this.physics.add.staticGroup();
        

        this.cameras.main.setBounds(0, 0, screenWidth, screenHeight); // level width 5x normal
        this.physics.world.setBounds(0, 0, screenWidth, screenHeight);
        this.cameras.main.setBackgroundColor("#1E2E3E");
        // this.cameras.main.startFollow(this.player);;


        
        this.cursors = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
            fireball: Phaser.Input.Keyboard.KeyCodes.S,
        });



        //player
        const xSpawn = screenWidth * 0.03;
        const ySpawn = screenHeight * 0.5;
        this.player = this.physics.add.sprite(xSpawn, ySpawn, 'mario').setScale(3);
        this.player.body.setSize(this.player.width * 0.9, this.player.height * 0.9);
        this.player.body.setOffset(this.player.width * 0.05, this.player.height * 0.05);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);
        this.children.bringToTop(this.player);
        this.player.setDepth(1000);

        //mysteryBlock variable physics
        this.mysteryBlock = this.physics.add.staticGroup();
        this.physics.add.collider(this.player, this.mysteryBlock);

        //score
        this.score = 0;
        this.death = 0;
        



        //ground
        
       this.holesGround = [Math.floor(0.27 * times), 4 + Math.floor(0.27  * times), Math.floor(0.635 * times), 4 + Math.floor(0.635 * times), 8 + Math.floor(0.635 * times), 
                        12 + Math.floor(0.635 * times), 16 + Math.floor(0.635 * times)   ]; 

       createHolesGround(this, platforms);

        

        //initial Text

        this.add.text(screenWidth/10, screenHeight/2, "Level 5",{
            fontFamily:"pixel",
            fontSize: 192  + Math.floor(screenWidth/1800),
            color:"#f0f0f0",
        }).setOrigin(0.5);
        


        //score

        this.scoreText = this.add.text(screenWidth/5 * 0.03, screenHeight * 0.1, "score: "+ localStorage.getItem("score_level5"),{
            fontFamily: 'pixel',
            fontSize: 28 + Math.floor(screenWidth/(1800*5)),
            color: '#f0f0f0'
        }).setScrollFactor(0).setDepth(100)

        //number of deaths

        this.deathsText = this.add.text(screenWidth/5 * 0.03, screenHeight * 0.15, "deaths: "+ this.death,{
            fontFamily: 'pixel',
            fontSize: 28 + Math.floor(screenWidth/(1800*5)),
            color: '#f0f0f0'
        }).setScrollFactor(0).setDepth(100)

        

        const closeBlock = 32 / screenWidth;

        this.levelData = [
            {
                height : -1,
                percentages: [.635 + closeBlock * 4, .635 + closeBlock * 22],
                types: ['block_underground', 'block_underground'],
                conclusion: false
            },
            {
                height:0,
                percentages: [.25, .25 + closeBlock * 2, .43, .43 + closeBlock * 2, .43 + closeBlock * 4, .635 + closeBlock * 4, .635 + closeBlock * 22],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground' ],
                conclusion: false
            },
            {
                height:1,
                percentages: [.25, .25 + closeBlock * 2, 3.27 + closeBlock * 3, 3.27 + closeBlock * 11, .43, .43 + closeBlock * 2, .43 + closeBlock * 4, .43 + closeBlock * 6, .535,
                             .635 + closeBlock * 4, .635 + closeBlock * 22, .8, .88 + closeBlock * 7
                ],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground',
                        'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground'
                ],
                conclusion: false
            },
            {
                height:2,
                percentages: [.25, .25 + closeBlock * 2, .35, .43, .43 + closeBlock * 2, .43 + closeBlock * 4, .57, 3.635 + closeBlock * 4, 7.635 + closeBlock * 9, 4.635 + closeBlock * 19,
                             8.635 + closeBlock * 22, 8.88
                 ],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground',  'misteryBlock_underground',
                        'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground'
                ],
                conclusion: false
            },
            {
                height:3,
                percentages: [.18, .25, .25 + closeBlock * 2, .37, .43 + closeBlock * 2, .43 + closeBlock * 4, .43 + closeBlock * 5,  .475, .55, .635 + closeBlock * 4, .815,
                              .88 + closeBlock * 7,  .88 + closeBlock * 9,
                 ],
                types: ['block_underground','block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 
                       'block_underground', 'block_underground', 'block_underground','block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground' ],
                conclusion: false

            },
            {
                height:4,
                percentages: [.18 + closeBlock * 3, .25, .43 + closeBlock * 4, .505, .52, .635 + closeBlock * 4, .77, .88 + closeBlock * 7, .88 + closeBlock * 9,  7.88 + closeBlock * 14],
                types: ['block_underground','block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground',
                        'block_underground', 'block_underground'
                ],
                conclusion: false
            },
            {
                height:5,
                percentages: [.18 + closeBlock * 6, .25, 7.385, .49, 7.57 + closeBlock * 3, 3.635 + closeBlock * 4, 2.635 + closeBlock * 9, .635 + closeBlock * 11, 4.635 + closeBlock * 12,
                                4.635 + closeBlock * 19, .635 + closeBlock * 22, .83, .83 + closeBlock * 3, .83 + closeBlock * 6, .88 + closeBlock * 9, .88 + closeBlock * 11
                ], 
                types: ['block_underground','block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground',
                        'block_underground',  'misteryBlock_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground','block_underground', 
                        'block_underground','block_underground', 'block_underground'
                ],
                conclusion: false
            },
            {
                height:6,
                percentages: [.25, .25 + closeBlock * 3, .35, .43 + closeBlock * 2, .46, .535, .635 + closeBlock * 4, .88 + closeBlock * 9,.88 + closeBlock * 11 ],
                types: ['block_underground', 'misteryBlock_underground', 'misteryBlock_underground', 'misteryBlock_underground', 'block_underground', 'block_underground', 'block_underground',
                        'block_underground', 'block_underground'
                 ],
                conclusion: false
            },
            {
                height:7,
                percentages: [.18 + closeBlock * 2, .505, .52 , .55, 7.57 + closeBlock * 8, .635 + closeBlock * 4, .88 + closeBlock * 11, 2.88 + closeBlock * 14, .88 + closeBlock * 16,
                              4.88 + closeBlock * 17
                ],
                types: [ 'block_underground', 'misteryBlock_underground', 'block_underground', 'block_underground','block_underground', 'block_underground', 'block_underground', 
                         'block_underground', 'misteryBlock_underground', 'block_underground'
                ],
                conclusion: false
            },
            {
                height:8,
                percentages: [9.18 + closeBlock * 7, .57, 13.635 + closeBlock * 4, 3.635 + closeBlock * 20, 3.83, .83 + closeBlock * 3, 3.83 + closeBlock * 4, .88 + closeBlock * 11 ],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'misteryBlock_underground', 'block_underground',
                         'block_underground'
                ],
                conclusion: false
            },{
                height:9,
                percentages: [.535, .635 + closeBlock * 22,],
                types: ['block_underground', 'block_underground'],
                conclusion: false
            },{
                height:10,
                percentages: [.635 + closeBlock * 22],
                types: [ 'block_underground'],
                conclusion: false
            },{
                height:11,
                percentages: [.635 + closeBlock * 22],
                types: [ 'block_underground'],
                conclusion: false
            }
            
        ]

        var newPlatforms = platforms;
        this.levelData.forEach(data =>{
            newPlatforms = createPlatforms(this.player, this, data.height, data.percentages, data.types, data.conclusion, newPlatforms);
        })


        


        //elements => bushes, clouds,...

        const height0 = 1 - 176 / (screenHeight/1.15);
        const height_fence = height0 + 18 / screenHeight;
        const decoration = [
            {
                key: 'cloud1',
                width:[.17, .25, .34, .54,.7, .80, .93, .97],
                height: [.15, .3, .24, .18, .15, .33, .84],
                scale: [.8,.6,.6, 1.5, 1,.9, .9, 1],
            },{
                key: 'cloud2',
                width:[.001, .3, .40, .45, .60 , .78, .88, .99, ],
                height: [.34, .34, .15, .24, .3, .73,  .37, .13, ],
                scale: [1.3, .8, 1, 0.85, 1, 1.2, .6, 1.5],
            },{
                key: 'bush1',
                width:[.1, .5, ],
                height: [height0, height0, height0],
                scale: [2,2,2],
            },{
                key: 'bush2',
                width:[.01, 0.58,],
                height: [height0, height0, height0],
                scale: [2,2, 2],
            },{
                key: 'mountain1',
                width:[.2],
                height: [height0 / 1.01],
                scale: [2],
            }
        ]
        decoration.forEach(data => {
            createDecoration(data.key, data.height, data.width, data.scale, this, 1);
        })



        //other platforms

        for(let i = 0; i<3; i++){
            newPlatforms.create(.15 * screenWidth + i * 128,height_fence * screenHeight, "fence").setTint(0x296B7A);
             
        }

        for(let i = 0; i<5; i++){
            this.add.image(Math.round(((.27 + closeBlock * (6 + i )) * screenWidth) / 32) * 32 - 16, screenHeight - (44.6 * 3.07 + 80), 'block_underground').setScale(2).setTint(0x296B7A)
        }

        this.add.image(Math.round(((.635 + closeBlock * 22) * screenWidth) / 32 ) * 32 - 32/2, screenHeight - (44.6 * 3.07 + 32 * 7 + 16 ), 'block_underground').setScale(2).setTint(0x296B7A)
        this.add.image(Math.round(((.635 + closeBlock * 22) * screenWidth) / 32 ) * 32 - 32/2, screenHeight - (44.6 * 3.07 + 32 * 8 + 16 ), 'block_underground').setScale(2).setTint(0x296B7A)
        
        //transparent
        newPlatforms.create(Math.round(((.635 + closeBlock * 22) * screenWidth) / 32 ) * 32 - 32/2, screenHeight - (44.6 * 3.07 + 32 * 5 + 16 ), 'block_underground').setScale(2).setAlpha(0)
        newPlatforms.create(Math.round(((.635 + closeBlock * 22) * screenWidth) / 32 ) * 32 - 32/2, screenHeight - (44.6 * 3.07 + 32 * 4 + 16 ), 'block_underground').setScale(2).setAlpha(0)



        this.tubes1 = createTubes(this.player, 'pipe1', this, [.41], 1);

        this.allPlatforms = newPlatforms;
        //entities


        //final game

        this.finalX = screenWidth * 0.99;
        this.finalY = screenHeight - (44.6 * 3.07) - 32 * 4 - 32 * 1.5;

    }




    update(){

        if (!levelCompleted && this.player.x >= this.finalX  && this.player.y <= this.finalY) {
            levelCompleted = true;
            console.log("arrivato")
            const score = localStorage.getItem("score_level5");
            levelCompletion(this, 5, score);
            
        }

        player_movement(this.player, this.cursors, this);

        this.cameras.main.centerOn(this.player.x, this.player.y);

        if (deathByFalling(this,this.player) || checkTubeCollision(this.player, this.tubes1, this))
            console.log("morto")   
  

        this.mysteryBlock.getChildren().forEach(block => {
            if (block.update) block.update();  
            
        });

        this.mysteryBlock.getChildren().forEach(block => {
            // console.log("update")
            if(block.isMysteryBlock && !block.isActivated){
                console.log("update mysteryBlock")
                checkCollision_mysteryBlock(this.player, block, this);
            }
        })

        


    
    }

    
}



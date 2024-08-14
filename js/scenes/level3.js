import { player_movement, deathByFalling, checkTubeCollision } from '../player_action.js';
import { createPlatforms, createDecoration, createTubes, checkCollision_mysteryBlock, createHolesGround } from '../createPlatforms.js';
import { levelCompletion } from '../main.js';

var deaths = 0;
var levelCompleted = false;
export default class Level3 extends Phaser.Scene {
    
    constructor() {
        super("Level3");
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
        
       this.holesGround = [Math.floor(0.19 * times), 4 + Math.floor(0.72  * times)  ]; 

       createHolesGround(this, platforms);


        

        //initial Text

        this.add.text(screenWidth/10, screenHeight/2, "Level 3",{
            fontFamily:"pixel",
            fontSize: 192  + Math.floor(screenWidth/1800),
            color:"#f0f0f0",
        }).setOrigin(0.5);
        


        //score

        this.scoreText = this.add.text(screenWidth/5 * 0.03, screenHeight * 0.1, "score: "+ localStorage.getItem("score_level3"),{
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
                percentages: [.8, .8 + closeBlock * 4, .8 + closeBlock * 8],
                types: [ 'block_underground', 'block_underground', 'block_underground'],
                conclusion: false
            },
            {
                height:0,
                percentages: [.4, .4 + closeBlock * 2, .4 + closeBlock * 4, .715 + closeBlock * 13, .85, .96],
                types: [ 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground'],
                conclusion: true
            },
            {
                height:1,
                percentages: [7.25, .3, .4, .4 + closeBlock * 2, .4 + closeBlock * 4, .4 + closeBlock * 6, 9.46, .715 + closeBlock * 12, .85, .85 + closeBlock * 2, .96 + closeBlock * 2],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground',
                        'block_underground', 'block_underground', 'block_underground'
                ],
                conclusion: true
            },
            {
                height:2,
                percentages: [.4, .4 + closeBlock * 2, .4 + closeBlock * 4, .65, .715 + closeBlock * 2, .715 + closeBlock * 4, .715 + closeBlock * 11, .8 + closeBlock * 4, .85 + closeBlock * 2,
                              .85 + closeBlock * 4, .96 + closeBlock * 4
                ],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'misteryBlock_underground',
                         'misteryBlock_underground', 'block_underground', 'misteryBlock_underground', 'block_underground'
                 ],
                conclusion: true
            },
            {
                height:3,
                percentages: [.32, .4, .4 + closeBlock * 2, 2.4 + closeBlock * 4, .535, 10.565 + closeBlock * 7, .65, .715 + closeBlock * 2, .715 + closeBlock * 4, .715 + closeBlock * 10, 
                               .85 + closeBlock * 4, .96 + closeBlock * 6
                ],
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 
                         'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground'],
                conclusion: true

            },
            {
                height:4,
                percentages: [3.25, .25 + closeBlock * 3, 3.25 + closeBlock * 4, .3, .4 + closeBlock * 2, .4 + closeBlock * 4, 4.46, .46 + closeBlock * 4, 4.46 + closeBlock * 5,
                              .55, .65, .715, .715 + closeBlock * 2, 6.715 + closeBlock * 4, 7.85 + closeBlock * 6
                ],
                types: ['block_underground', 'misteryBlock_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground','block_underground', 
                        'misteryBlock_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground', 'block_underground' ],
                conclusion: false
            },
            {
                height:5,
                percentages: [9.35, .4 + closeBlock * 4, .515, 2.665, .715 + closeBlock * 2, .715 + closeBlock * 4], 
                types: ['block_underground', 'block_underground', 'block_underground', 'block_underground',  'block_underground', 'block_underground'],
                conclusion: false
            },
            {
                height:6,
                percentages: [.32, .565, 8.565 + closeBlock * 3, .565 + closeBlock * 11, .565 + closeBlock * 14, .685, .715 + closeBlock * 2, .715 + closeBlock * 4 ],
                types: ['block_underground', 'block_underground', 'block_underground', 'misteryBlock_underground', 'misteryBlock_underground', 'block_underground', 'block_underground',
                        'block_underground', ],
                conclusion: false
            },
            {
                height:7,
                percentages: [.7, .715 + closeBlock * 4, 2.715 + closeBlock * 7, .715 + closeBlock * 9, .715 + closeBlock * 10, .85 + closeBlock * 15],
                types: [ 'block_underground', 'block_underground', 'block_underground', 'misteryBlock_underground' , 'block_underground','misteryBlock_underground' ],
                conclusion: false
            },
            {
                height:8,
                percentages: [.35 + closeBlock * 4],
                types: ['misteryBlock_underground' ],
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
        const height_mountain = height_fence;
        const decoration = [
            {
                key: 'cloud1',
                width:[.17, .25, .34, .54,.7, .80, .93],
                height: [.15, .3, .24, .18, .15, .33, ],
                scale: [.8,.6,.6, 1.5, 1,.9, .9],
            },{
                key: 'cloud2',
                width:[.001, .3, .40, .45, .60 , .88, .99 ],
                height: [.34, .34, .15, .24, .3, .37, .13 ],
                scale: [1.3, .8, 1, 0.85, 1, .6, 1.5],
            },{
                key: 'bush1',
                width:[.01, .55, .68],
                height: [height0, height0, height0],
                scale: [2,2,2],
            },{
                key: 'bush2',
                width:[.16, .34, .93],
                height: [height0, height0, height0],
                scale: [2, 2, 2],
            },{
                key: 'fence',
                width:[0.04, 0.04 + 129 / screenWidth, 0.04 + 129 * 2 / screenWidth, 0.04 + 129 * 3 / screenWidth, 0.04 + 129 * 4 / screenWidth, 0.04 + 129 * 5 / screenWidth ],
                height: [height_fence, height_fence, height_fence, height_fence, height_fence],
                scale: [1,1,1,1,1],
            },{
                key: 'mountain2',
                width:[.14],
                height: [height_mountain + 10],
                scale: [2,],
            }
        ]

        decoration.forEach(data => {
            createDecoration(data.key, data.height, data.width, data.scale, this, 1);
        })



        this.tubes1 = createTubes(this.player, 'pipe1', this, [.715], 1);
        this.tubes2 = createTubes(this.player, 'pipe2', this, [.365], 1);

        this.allPlatforms = newPlatforms;
        //entities


        this.finalX = screenWidth * 0.99;
        this.finalY = screenHeight - (44.6 * 3.07) - 32 * 4 - 32 * 1.5

    }




    update(){

        if (!levelCompleted && this.player.x >= this.finalX  && this.player.y <= this.finalY) {
            levelCompleted = true;
            console.log("arrivato")
            const score = localStorage.getItem("score_level3");
            levelCompletion(this, 3, score);
            
        }

        player_movement(this.player, this.cursors, this);

        this.cameras.main.centerOn(this.player.x, this.player.y);

        if (deathByFalling(this,this.player) || checkTubeCollision(this.player, this.tubes1, this) || checkTubeCollision(this.player, this.tubes2, this))
            console.log("morto") 
  


        this.mysteryBlock.getChildren().forEach(block => {
            // console.log("update")
            if(block.isMysteryBlock && !block.isActivated){
                console.log("update mysteryBlock")
                checkCollision_mysteryBlock(this.player, block, this);
            }
        })
    }

    
}



import { player_movement, deathByFalling, checkTubeCollision} from '../player_action.js';
import { createPlatforms, createDecoration, createTubes, checkCollision_mysteryBlock, createHolesGround } from '../createPlatforms.js';
import { levelCompletion } from '../main.js';

var deaths = 0;
var levelCompleted = false;
export default class Level2 extends Phaser.Scene {
    
    constructor() {
        super("Level2");
    }

    
    create(){

        const screenWidth = this.scale.width * 5;
        const screenHeight = this.scale.height * 1.1;
        const times = Math.floor(screenWidth / 128);
        const platforms = this.physics.add.staticGroup();
        

        this.cameras.main.setBounds(0, 0, screenWidth, screenHeight); // level width 5x normal
        this.physics.world.setBounds(0, 0, screenWidth, screenHeight);
        this.cameras.main.setBackgroundColor("rgb(132,132,255)");
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
        
       this.holesGround = [Math.floor(0.27 * times), Math.floor(0.65 * times), 4 + Math.floor(0.65  * times)  ]; 
       createHolesGround(this, platforms);


        //initial Text

        this.add.text(screenWidth/10, screenHeight/2, "Level 2",{
            fontFamily:"pixel",
            fontSize: 192  + Math.floor(screenWidth/1800),
            color:"#f0f0f0",
        }).setOrigin(0.5);
        


        //score

        this.scoreText = this.add.text(screenWidth/5 * 0.03, screenHeight * 0.1, "score: "+ localStorage.getItem("score_level2"),{
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
                height:0,
                percentages: [.19, .19 + closeBlock * 3, .19 + closeBlock * 6, .35 + closeBlock * 11, .535, .62],
                types: ['block', 'block', 'block','block', 'block', 'block' ],
                conclusion: false
            },
            {
                height:1,
                percentages: [.19, .19 + closeBlock * 3, .19 + closeBlock * 6, .35 + closeBlock * 11, .535, .62],
                types: ['block', 'block', 'block', 'block', 'block', 'block'],
                conclusion: false
            },
            {
                height:2,
                percentages: [.19 + closeBlock * 3, .19 + closeBlock * 6, 0.269, 0.269 + closeBlock * 15, 0.35 + closeBlock * 11, 6.535, 0.59, .62 - closeBlock, .62, .635 + closeBlock * 3, 7.82,  7.92 + closeBlock * 4 ],
                types: ['block', 'block', 'misteryBlock', 'misteryBlock', 'block', 'block', 'block', 'misteryBlock', 'block',  'block', 'block', 'block'],
                conclusion: false
            },
            {
                height:3,
                percentages: [.19 + closeBlock * 3, .19 + closeBlock * 6, 9.35, .535, 0.59, .62, .635 + closeBlock * 6, .685, .715, .88 + closeBlock * 3],
                types: ['block', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'misteryBlock'],
                conclusion: false

            },
            {
                height:4,
                percentages: [.19 + closeBlock * 6, 0.415, .45, .535, 2.59, .62, .635, .75, .98],
                types: ['block',  'block', 'block', 'block', 'block', 'block', 'block', 'block', 'block'],
                conclusion: true
            },
            {
                height:5,
                percentages: [.19 + closeBlock * 6, .435, 9.48, 0.59, .62, .78 , 7.82 + closeBlock * 4,  7.92 ], //
                types: ['block', 'block', 'block', 'block', 'block', 'block', 'block', 'block' ],
                conclusion: false
            },
            {
                height:6,
                percentages: [0.35 + closeBlock * 3, 0.35 + closeBlock * 4, 7.35 + closeBlock * 5, .465, 0.59, -2.62 + closeBlock, .715, ],
                types: ['block','misteryBlock', 'block', 'block', 'block', 'block', 'misteryBlock', 'misteryBlock'],
                conclusion: false
            },
            {
                height:7,
                percentages: [.19 + closeBlock * 3,  ],
                types: ['misteryBlock' ],
                conclusion: false
            },
            {
                height:8,
                percentages: [.48 + closeBlock * 4, .82 + closeBlock * 7, 7.88, .91 + closeBlock * 6],
                types: ['misteryBlock', 'misteryBlock', 'block', 'misteryBlock' ],
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
                width:[.19, .25, .34, .53,.7, .80, .93],
                height: [.15, .37, .24, .18, .2, .33, ],
                scale: [.8,.6,.6, 1.5, 1,.9, .9],
            },{
                key: 'cloud2',
                width:[.045, .3, .40, .45, .60 , .88, .99 ],
                height: [.2, .34, .15, .24, .3, .37, .13 ],
                scale: [1.1, .8, 1, 0.85, 1.2, .8, 1.5],
            },{
                key: 'bush1',
                width:[.01, .13, .44, .9],
                height: [height0,height0, height0, height0],
                scale: [2,2,2,2],
            },{
                key: 'bush2',
                width:[.07, 0.565, .81],
                height: [height0, height0, height0],
                scale: [2,2, 2],
            },{
                key: 'fence',
                width:[0.01, 0.01 + 129 / screenWidth, 0.01 + 129 * 2 / screenWidth, 0.01 + 129 * 3 / screenWidth, 0.01 + 129 * 4 / screenWidth, 0.01 + 129 * 5 / screenWidth ],
                height: [height_fence, height_fence, height_fence, height_fence, height_fence],
                scale: [1,1,1,1,1],
            }
        ]

        decoration.forEach(data => {
            createDecoration(data.key, data.height, data.width, data.scale, this, 0);
        })



        this.tubes1 = createTubes(this.player, 'pipe1', this, [.23], 0);
        this.tubes2 = createTubes(this.player, 'pipe2', this, [.78], 0);

        this.allPlatforms = newPlatforms;
        //entities

        this.finalX = screenWidth * 0.99;
        this.finalY = screenHeight - (44.6 * 3.07) - 32 * 4 - 32 * 1.5

    }




    update(){

        if (!levelCompleted && this.player.x >= this.finalX  && this.player.y <= this.finalY) {
            levelCompleted = true;
            console.log("arrivato")
            const score = localStorage.getItem("score_level2");
            levelCompletion(this, 2, score);
            
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



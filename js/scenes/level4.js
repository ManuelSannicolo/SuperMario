import { loadResources } from '../loadResources.js';
import { player_movement, deathByFalling, checkTubeCollision } from '../player_action.js';
import { createPlatforms, createDecoration, createTubes, checkCollision_mysteryBlock, createHolesGround } from '../createPlatforms.js';
import { createEntities } from '../entities.js';
import { levelCompletion } from '../main.js';

var levelCompleted = false;
export default class Level4 extends Phaser.Scene {
    
    constructor() {
        super("Level4");
    }

    preload(){
        // loadResources(this);
    }

    
    create(){
        const screenWidth = this.scale.width * 5;
        const screenHeight = this.scale.height * 1.1
        const times = Math.floor(screenWidth / 128);
        const platforms = this.physics.add.staticGroup();
        

        this.cameras.main.setBounds(0, 0, screenWidth, screenHeight); // level width 5x normal
        this.physics.world.setBounds(0, 0, screenWidth, screenHeight);
        this.cameras.main.setBackgroundColor("rgb(132,132,255)");
        // this.cameras.main.startFollow(this.player);;



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



        this.cursors = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
            fireball: Phaser.Input.Keyboard.KeyCodes.S,
        });


        //score

        this.score = 0;
        this.death = 0;


        //ground
        
       this.holesGround = [Math.floor(0.6 * times)]; //hole at 60%

       createHolesGround(this, platforms);


        //initial Text

        this.add.text(screenWidth/10, screenHeight/2, "Level 4",{
            fontFamily:"pixel",
            fontSize: 192  + Math.floor(screenWidth/1800),
            color:"#f0f0f0",
        }).setOrigin(0.5);
        



        //score

        this.scoreText =  this.add.text(screenWidth/5 * 0.03, screenHeight * 0.1, "score: "+ this.score,{
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
                percentages: [.2,],
                types: ['block'],
                conclusion: false
            },
            {
                height:1,
                percentages: [.2 + closeBlock * 2,  ],
                types: ['block'],
                conclusion: false
            },
            {
                height:2,
                percentages: [.2 + closeBlock * 4 ],
                types: ['block'],
                conclusion: false
            },
            {
                height:3,
                percentages: [.2 + closeBlock * 6 ],
                types: ['block'],
                conclusion: false

            },
            {
                height:4,
                percentages: [9.2 + closeBlock * 8],
                types: ['block'],
                conclusion: false
            },
            {
                height:5,
                percentages: [],
                types: [],
                conclusion: false
            },
            {
                height:6,
                percentages: [8.17 , .17 + closeBlock * 8],
                types: ['block', 'misteryBlock'],
                conclusion: false
            },
            {
                height:7,
                percentages: [],
                types: [],
                conclusion: false
            },
            {
                height:8,
                percentages: [],
                types: [],
                conclusion: false
            },
            {
                height:9,
                percentages: [],
                types: [],
                conclusion: false
            },
        ]

        var newPlatforms = platforms;
        this.levelData.forEach(data =>{
            newPlatforms = createPlatforms(this.player, this, data.height, data.percentages, data.types, data.conclusion, newPlatforms);
        })




        //elements => bushes, clouds,...

        const height0 = 1 - 176 / (screenHeight/1.15);
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
                width:[.1,.3, .84],
                height: [height0, height0, height0],
                scale: [2,2,2],
            },{
                key: 'bush2',
                width:[.01, 0.58, .75],
                height: [height0, height0, height0],
                scale: [2,2, 2],
            }
        ]

        // decoration.forEach(data => {
        //     createDecoration(data.key, data.height, data.width, data.scale, this, 0);
        // })

        this.tubes1 = createTubes(this.player, 'pipe1', this, [.26], 0);
        this.tubes2 = createTubes(this.player, 'pipe2', this, [.59], 0);


        //goomba

        this.entities= [
            {
                width: [.1, .13, .15],
                height: [height0,height0,height0],
                distance: [5,5,5],
            }
        ]

        this.allPlatforms = newPlatforms;
        // createEntities(this, 'goomba', this.entities[0].width, this.entities[0].height, this.player, this.entities[0].distance, this.allPlatforms);



        this.finalX = screenWidth * 0.99;

    }






    update(){

        if (!levelCompleted && this.player.x >= this.finalX ) {
            levelCompleted = true;
            console.log("arrivato")
            levelCompletion(this, 1, this.score);
            
        }

        player_movement(this.player, this.cursors, this);

        this.cameras.main.centerOn(this.player.x, this.player.y);

        if (deathByFalling(this,this.player) || checkTubeCollision(this.player, this.tubes1, this) || checkTubeCollision(this.player, this.tubes2, this))
            console.log("morto")   


        //goombas movement
        // this.goombas.getChildren().forEach(goomba => {
        //     goomba.update();  
        // });


        this.mysteryBlock.getChildren().forEach(block => {
            // console.log("update")
            if(block.isMysteryBlock && !block.isActivated){
                console.log("update mysteryBlock")
                checkCollision_mysteryBlock(this.player, block, this);
            }
        })
    
        
    }
}



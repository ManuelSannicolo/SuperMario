export default class SelectLevelScene extends Phaser.Scene{

    constructor() {
        super('SelectLevel');
    }

    preload() {
        this.load.image("block", "elements/blocks/overworld/block.png");
        this.load.image("block_underground", "elements/blocks/underground/block.png");

        this.load.image("bush1", "elements/scenery/overworld/bush1.png");
        this.load.image("bush2", "elements/scenery/overworld/bush2.png");
        this.load.image("cloud1", "elements/scenery/overworld/cloud1.png");
        this.load.image("cloud2", "elements/scenery/overworld/cloud2.png");
        this.load.image("fence", "elements/scenery/overworld/fence.png");
        this.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
        this.load.image("mountain1", "elements/scenery/overworld/mountain1.png");
        this.load.image("mountain2", "elements/scenery/overworld/mountain2.png");

        this.load.image("floorbricks", "elements/scenery/overworld/floorbricks.png");
    }


    create(){
        
        console.log("creato Select Level");

        //const
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight * 1.1;

        //bg color
        this.cameras.main.setBackgroundColor("rgb(132,132,255)")

        //bg clouds
        this.add.image(screenWidth*0.1, screenHeight*0.18, 'cloud1').setScale(0.8);
        this.add.image(screenWidth*0.05, screenHeight*0.35, 'cloud2').setScale(0.5);
        this.add.image(screenWidth*0.40, screenHeight*0.25, 'cloud2').setScale(0.8);
        this.add.image(screenWidth*0.60, screenHeight*0.20, 'cloud1').setScale(1);
        this.add.image(screenWidth*0.90, screenHeight*0.30, 'cloud1').setScale(0.8);



        //bg ground
        for ( let i = 128/2; i<screenWidth; i+=128){
            this.add.image(i, screenHeight-(44.6*1.5), 'floorbricks').setScale(1.4);
            this.add.image(i, screenHeight-(44.6*2.5), 'floorbricks').setScale(1.4);
        } 



        //bg bush + supermario
        this.add.image(screenWidth*0.15, screenHeight-(44.6*3.5+11), 'bush1').setScale(2);
        this.add.image(screenWidth*0.35, screenHeight-(44.6*3.5+11), 'bush2').setScale(2);
        this.add.image(screenWidth*0.85, screenHeight-(44.6*3.5+11), 'bush1').setScale(2);
        this.add.image(screenWidth*0.55, screenHeight-(44.6*4.5+9), 'mountain2').setScale(2);
        for(let i = screenWidth*0.55; i<screenWidth; i+=129 ){
            this.add.image(i, screenHeight-(44.6*3+16), 'fence')
        }
        

        //blocks
        const blockDimension = 64;
        const nLevel = 5;
        const inlinePadding = screenWidth*0.2;
        const gap = (screenWidth-inlinePadding*2 - blockDimension*nLevel)/4;

        const levels = [
            {key:'level1', unlocked:true},
            {key:'level2', unlocked: localStorage.getItem('level2unlocked') === 'true'},
            {key:'level3', unlocked: localStorage.getItem('level3unlocked') === 'true'},
            {key:'level4', unlocked: localStorage.getItem('level4unlocked') === 'true'},
            {key:'level5', unlocked: localStorage.getItem('level5unlocked') === 'true'},
        ];

        levels.forEach((level, index) => {
            let position= inlinePadding+(blockDimension/2)+(gap+blockDimension)*index;
            const y = screenHeight/2;
            let fontsize = 28 + Math.floor(screenWidth/1800);

            if(level.unlocked){
                const block = this.add.image(position, y, 'block').setScale(4).setInteractive();
                block.on('pointerdown', () =>{
                    this.scene.start(level.key);
                });
            } else 
                this.add.image(position, y , 'block_underground').setScale(4);
            

            //text
            this.add.text(position, y + blockDimension*1.1, '0'+(index+1),{
                fontFamily: 'pixel',
                fontSize: fontsize,
                color:"#f0f0f0",

            }).setOrigin(0.5);

        })

        



    }
}
import { loadResources } from '../loadResources.js';
import { createAnimations } from '../Animation.js';
export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        loadResources(this);
    }

    create() {
        console.log("creato Bootscene");
        createAnimations(this);
        this.scene.start('LevelSelection');
    }



}

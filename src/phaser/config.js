import { GameScene } from './scenes/game'
import { ExampleScene } from './scenes/example'

export const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
	backgroundColor: '#CC8899',
	scene: [GameScene, ExampleScene]
};

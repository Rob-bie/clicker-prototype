import { Scene } from 'phaser'
import { PhaserHello } from '../sprites/phaserhello'

export class ExampleScene extends Scene {

	constructor() {
		super({key: 'ExampleScene'})
	}

	preload() {
		this.load.image('phaserhello', 'src/assets/phaserhello.png');
	}

	create() {
		this.phaserHello = new PhaserHello(this,
								this.game.config.width / 2,
								this.game.config.height / 2,
								'phaserhello');
	}

	update() {
		this.phaserHello.update();
	}

}

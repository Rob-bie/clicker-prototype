import { GameObjects } from 'phaser'
import { scaleSprite } from '../util/scaler'

export class Chest extends GameObjects.Sprite {

	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		this.add();
	}

	update() {

	}

	add() {
		this.setInteractive();
		scaleSprite(this, 0.45);
		this.scene.add.existing(this);
		this.scene.physics.world.enable(this);
	}

}

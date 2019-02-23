import { Scene } from 'phaser'
import { Math as PhaserMath } from 'phaser'
import { Chest } from '../sprites/chest'
import { tapTween } from '../util/tweens'
import { scaleSprite } from '../util/scaler'

export class GameScene extends Scene {

	constructor() {
		super({key: 'GameScene'})
	}

	preload() {
		this.load.image('chest', 'src/assets/chest.png');
		this.load.image('coin', 'src/assets/coin.png');
	}

	create() {
		this.gameChest = new Chest(this, this.game.config.width / 2, this.game.config.height / 2, 'chest');
		this.chestTween = this.tweens.add(tapTween(this.gameChest));
		this.coinStash = this.add.group({
			defaultKey: 'coin',
			maxSize: 20,
			createCallback: (coin) => {
				scaleSprite(coin, 0.05);
				this.tweens.add({
					targets: coin,
					x: PhaserMath.RND.between(0, this.game.config.width),
					y: -100,
					duration: 500,
					ease: 'Sine'
				});
			}
		});

		this.gameChest.on('pointerdown', () => {
			this.chestTween.restart();
			this.coinStash.get((this.game.config.width / 2) + PhaserMath.RND.between(-20, 20), this.game.config.height / 2);
			console.log(this.coinStash.children);
		});



	}

	update() {
		this.coinStash.children.iterate((coin) => {
			if(coin && coin.y <= 0) {
				this.coinStash.killAndHide(coin);
				this.coinStash.remove(coin);
			}
		});
	}

}

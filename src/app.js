import { PhaserMain } from './phaser/main'

export class App {

    constructor() {
      this.message = '';
    }

    attached() {
		new PhaserMain().go();
    }

}

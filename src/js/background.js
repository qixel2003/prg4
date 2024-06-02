import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Background.width, height: Resources.Background.height })
        this.scale = new Vector(3.0, 3.0);

    }
    
    onInitialize(engine) {

        this.graphics.use(Resources.Background.toSprite())
        // this.scale = new Vector(0.5, 0.5);
    }
}
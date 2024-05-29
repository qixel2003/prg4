import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    
    onInitialize(engine) {

        this.graphics.use(Resources.Background.toSprite())
        this.scale = new Vector(0.5, 0.5);
        this.pos = new Vector(400, 400);
    }
}
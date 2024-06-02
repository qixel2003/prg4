import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Platform extends Actor {
    constructor(x, y) {
        super({ width: 130, height: 120 })
        this.body.collisionType = CollisionType.Fixed
        this.pos = new Vector(x, y);
        this.scale = new Vector(1.5, 1.5);

    }

    onInitialize(engine) {

        this.graphics.use(Resources.Platform.toSprite())
    }
}
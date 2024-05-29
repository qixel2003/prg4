import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Platform extends Actor {
    constructor(x, y) {
        super({ width: 110, height: 100 })
        this.body.collisionType = CollisionType.Fixed
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {

        this.graphics.use(Resources.Platform.toSprite())
    }
}
import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Door extends Actor {
    constructor(x, y) {
        super({ width: 110, height: 100 })
        this.body.collisionType = CollisionType.Passive
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.5, 0.5);
        this.state=false;

    }

    onInitialize(engine) {

        this.graphics.use(Resources.Door.toSprite())
    }

    openDoor() {
        if (this.state) {
            // Apply a red tint when the state is true
            const tintedSprite = new Color(0, 0, 0);
            this.graphics.use(tintedSprite);

        } else {
            // Use the original sprite when the state is false
        }
        console.log("open")
    }
}
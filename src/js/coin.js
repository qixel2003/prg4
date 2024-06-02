import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Coin extends Actor {
    constructor(x, y) {
        super({ width: 100, height: 100 })
        this.body.collisionType = CollisionType.Fixed
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.2, 0.2);

    }

    onInitialize(engine) {

        this.graphics.use(Resources.Coin.toSprite())
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => this.kill())
    }

    onPostKill() {
        // console.log('nooooooooo nemo')
        this.scene.addPoint()
    }
}
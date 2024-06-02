import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Enemy extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Enemy.width-250, height: Resources.Enemy.height-100 })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Enemy.toSprite())
        this.scale = new Vector(0.3,0.3)

    }

    onPreUpdate(engine) {
        // if (this.pos.x>400) {
        //     this.vel = new Vector(-100, this.vel.y);
        // }
        // else{
        //     this.vel = new Vector(100, this.vel.y);
        // }

    }
}
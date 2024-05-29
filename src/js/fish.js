import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor {

    constructor() {
        super({ width: 100, height: 100 })

    }

    onInitialize() {

        // console.log("i fish")
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(Math.random() * 800 + 400, Math.random() * 600)
        this.vel = new Vector(Math.random() * -250, 0)

        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => this.kill())
    }

    onPreUpdate() {
        if (this.pos.x < -10) {
            this.pos.x = 1000
        }
    }

    onPostKill() {
        // console.log('nooooooooo nemo')
        this.scene.addPoint()
    }
}
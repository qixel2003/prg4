import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Kachow extends Actor {

    onInitialize() {

        console.log("ka-chow")
        this.graphics.use(Resources.Lightning.toSprite())
        this.pos = new Vector(8000, 400)
        this.vel = new Vector(-2000, 0)
    }

    onPreUpdate() {
        if (this.pos.x < -4000) {
            console.log('turn')
            this.graphics.flipHorizontal = true
            this.vel.x = 2000

        }


        // if (this.pos.x > 4000) {
        //     console.log('turn2')
        //     this.graphics.flipHorizontal = false
        //     this.vel.x = -2000
        // }

    }
}
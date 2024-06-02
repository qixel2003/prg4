import { Actor, Engine, Vector, CollisionType, Color} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Door extends Actor {
    constructor(x, y) {
        super({ width: 110, height: 100 })
        this.body.collisionType = CollisionType.Passive
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.5, 0.5);
        this.state=true;


        

    }

    onInitialize(engine) {
        this.sprite = Resources.Door.toSprite()

        this.graphics.use(this.sprite)
    }

    openDoor() {
        if (this.state) {
            // Apply a red tint when the state is true
            this.sprite.tint = new Color(0,0,0)
            this.graphics.use(this.sprite)

            console.log("open")
        }
    }
}
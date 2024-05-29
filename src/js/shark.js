import { Actor, Engine, Vector, Keys, clamp, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Door } from './door.js'

export class Shark extends Actor {

    constructor(x, y) {
        super({ width: 1500, height: 1800 })
        this.isGrounded = false;
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(400, 400);
        this.scale = new Vector(0.05, 0.05);
        this.on('collisionstart', (event) => this.onCollisionStart(event))
        this.on('collisionend', (event) => this.onCollisionEnd(event))
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let unispeed = 150;

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = unispeed;

        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -unispeed;
        }

        if (this.isGrounded && engine.input.keyboard.wasPressed(Keys.Space)) {
            this.body.applyLinearImpulse(new Vector(0, -10000))
            console.log("jump")
            this.isGrounded = false           // grounded weer op true zetten na collision met ground

            // alternatief voor springen met velocity
            // this.vel = new Vector(this.vel.x, this.vel.y - 400)

        }


        this.vel = new Vector(xspeed, this.vel.y);
        this.graphics.flipHorizontal = (this.vel.x < 0)

        // if (engine.input.keyboard.wasPressed(Keys.Space)) {
        //     console.log("shoot!")
        // }

    }

    onCollisionStart(event) {
        if (event.other && event.other.body.collisionType === CollisionType.Fixed) {
            // console.log("grounded")
            this.isGrounded = true; // Set isGrounded to true when colliding with the ground
        }

        if (event.other instanceof Fish) {
            this.hitSomething(event);
        }

        if (event.other instanceof Door) {
            event.other.openDoor(); // deur openen
        }
        // if (event.other instanceof Coin) {
        //     event.other.pickUp(this); // coin oppakken
        // }
        // if (event.other instanceof Powerup) {
        //     event.other.pickUp(this); // powerup oppakken
        // }
    }

    onCollisionEnd(event) {
        if (event.other && event.other.body.collisionType === CollisionType.Fixed) {
            this.isGrounded = false; // Set isGrounded to false when leaving the ground
        }
    }

    onPostKill() {

    }

    hitSomething(event) {
        if (event.other instanceof Fish) {
            // console.log(`CHOMP! ${event.other}`)
            // this.kill()           // remove the car
            event.other.kill()    // remove the tree
        }

    }
}
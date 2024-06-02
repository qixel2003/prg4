import { Actor, Engine, Vector, Keys, clamp, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Door } from './door.js'
import { Enemy } from "./enemy.js"
import { Coin } from "./coin.js"

export class Shark extends Actor {

    constructor(x, y) {
        super({ width: 150, height: 320 })
        this.isGrounded = false;
        this.pos = new Vector(x, y);

    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.graphics.use(Resources.Shark.toSprite())
        this.scale = new Vector(0.3, 0.3);
        this.on('collisionstart', (event) => this.onCollisionStart(event))
        this.on('collisionend', (event) => this.onCollisionEnd(event))
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let unispeed = 250;

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = unispeed;

        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -unispeed;
        }

        // if (this.isGrounded && engine.input.keyboard.wasPressed(Keys.Space)) {
        //     this.body.applyLinearImpulse(new Vector(0, -10000))
        //     console.log("jump")
        //     this.isGrounded = false           // grounded weer op true zetten na collision met ground
        // } 

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            if (this.pos.y > 500) {
                this.body.applyLinearImpulse(new Vector(0, -7000))
                console.log("jump")
                this.isGrounded = false           // grounded weer op true zetten na collision met ground
            } else {
                console.log("mag niet springten")
            }
        }
        if (this.pos.y > 700) {
            this.death(event); // powerup oppakken
            // if (this.scene && this.scene.enige) {
            this.scene.engine.goToScene('gameover')
            // }
        }


        this.vel = new Vector(xspeed, this.vel.y);
        this.graphics.flipHorizontal = (this.vel.x < 0)


    }

    onCollisionStart(event) {
        if (event.other && event.other.body.collisionType === CollisionType.Fixed) {
            // console.log("grounded")
            this.isGrounded = true; // Set isGrounded to true when colliding with the ground
        }

        if (event.other instanceof Coin) {
            this.hitSomething(event);
        }

        if (event.other instanceof Door) {
                if (this.scene.score == 6) {
                    event.other.openDoor(); // deur openen
                    this.scene.engine.goToScene('level2')
                }
                if (this.scene.score > 6) {
                    event.other.openDoor(); // deur openen
                    this.scene.engine.goToScene('levelclear')
                }
            
        }
        // if (event.other instanceof Coin) {
        //     event.other.pickUp(this); // coin oppakken
        // }
        if (event.other instanceof Enemy) {
            this.death(event); // powerup oppakken
            // if (this.scene && this.scene.enige) {
                this.scene.engine.goToScene('gameover')
            // }
        }
    }

    onCollisionEnd(event) {
        if (event.other && event.other.body.collisionType === CollisionType.Fixed) {
            this.isGrounded = false; // Set isGrounded to false when leaving the ground
        }
    }

    onPostKill() {

    }

    hitSomething(event) {
        if (event.other instanceof Coin) {
            // console.log(`CHOMP! ${event.other}`)
            // this.kill()           // remove the car
            event.other.kill()    // remove the tree
        }

    }

    death(event){
        // this.kill()
        console.log(`you died`)
    }
}
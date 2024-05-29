import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Kachow } from './lightning.js'
import { Shark } from './shark.js'
import { Background } from './background.js'
import { Platform } from './platform.js'
import { Coin } from './coin.js'
import { Door } from './door.js'
import { UI } from './ui.js'


export class Level extends Scene {
    onInitialize(engine) {
        this.startLevel()
    }
    onActivate(ctx) {
        console.log("reset het level")

    }


    startLevel() {

        this.score = 0

        console.log("start de game!")
        // this.createbackground()
        this.createPlatform()
        this.createFish()
        this.createCoin()
        this.createDoor()
        this.createShark()

        // const lightning = new Kachow()
        // this.add(lightning)
        this.ui = new UI()
        this.add(this.ui)
        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        // this.add(this.label)
        this.label.text = `Score: ${this.score}`
    }

    onPreUpdate(engine) {
    }

    createFish() {
        for (let i = 0; i < 50; i++) {
            const fish = new Fish()
            this.add(fish)
        }
    }

    createShark() {
        const shark = new Shark()
        this.add(shark)
        this.camera.strategy.lockToActor(shark)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200))
    }

    createBackground() {
        const bg = new Background()
        this.add(bg)
    }

    createPlatform() {
        for (let i = 0; i < 15; i++) {
            const platform = new Platform(i*60 ,600)
            this.add(platform)
        }
    }

    createCoin() {
            const coin = new Coin(100, 100)
            this.add(coin)
    }

    createDoor() {
        const door = new Door(700, 500)
        this.add(door)
    }



    addPoint() {
        this.score++
        this.label.text = `Score: ${this.score}`
    }
}

new Level()
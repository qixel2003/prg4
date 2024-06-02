import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene, Keys } from "excalibur"
import { IntroBackground } from './introBackground.js'
import { Resources, ResourceLoader } from './resources.js'

export class Intro extends Scene {
    onInitialize(engine) {
        this.add(new IntroBackground(350, 300))
        this.showIntro()
    }
    onActivate(ctx) {
        this.on('preupdate', (event) => {

            if (event.engine.input.keyboard.wasPressed(Keys.Space)) {
                event.engine.goToScene('level')

            }
        });
    }

    showIntro() {
        // const intro = new IntroBackground(200,200)
        // this.add(new IntroBackground(200,200))
        console.log("lets start")
    }
}

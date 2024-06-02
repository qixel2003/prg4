import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene, Keys } from "excalibur"
import { LevelclearBackground } from './levelclearBackground.js'
import { Resources, ResourceLoader } from './resources.js'

export class LevelClear extends Scene {
    onInitialize(engine) {
        this.add(new LevelclearBackground(350, 300))
        this.showLeverclear()
    }
    onActivate(ctx) {
        this.on('preupdate', (event) => {

            if (event.engine.input.keyboard.wasPressed(Keys.Space)) {
                event.engine.goToScene('intro')

            }
        });
    }

    showLeverclear() {
        console.log("level completed")
    }
}
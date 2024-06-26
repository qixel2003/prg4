import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene, Keys } from "excalibur"
import { GameoverBackground } from './gameoverBackground.js'
import { Resources, ResourceLoader } from './resources.js'

export class GameOver extends Scene {
    onInitialize(engine) {
        this.add(new GameoverBackground(350, 300))
        this.showGameover()
    }
    onActivate(ctx) {
        this.on('preupdate', (event) => {

            if (event.engine.input.keyboard.wasPressed(Keys.Space)) {
                event.engine.goToScene('level')

            }
        });
    }

    showGameover() {
        console.log("game over")
    }
}
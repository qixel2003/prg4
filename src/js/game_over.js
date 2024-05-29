import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class GameOver extends Scene {
    onInitialize(engine) {
        this.showGameover()
    }
    onActivate(ctx) {
        console.log("reset het level")

    }
    
    showGameover() {
        console.log("game over")
    }
}

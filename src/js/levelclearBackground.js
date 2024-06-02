import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class LevelclearBackground extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.LevelClear.width, height: Resources.LevelClear.height })
        this.scale = new Vector(1.5, 1.5);

    }

    onInitialize(engine) {
        this.graphics.use(Resources.LevelClear.toSprite())
    }
}
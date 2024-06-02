import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class GameoverBackground extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.GameoverBackground.width, height: Resources.GameoverBackground.height })
        this.scale = new Vector(2.0, 2.0);

    }

    onInitialize(engine) {
        this.graphics.use(Resources.GameoverBackground.toSprite())
    }
}
import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class IntroBackground extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.IntroBackground.width, height: Resources.IntroBackground.height })
        this.scale = new Vector(2.0, 2.0);

    }

    onInitialize(engine) {
        this.graphics.use(Resources.IntroBackground.toSprite())
    }
}
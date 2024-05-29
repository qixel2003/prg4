import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, DisplayMode, ScreenElement } from "excalibur"

export class UI extends ScreenElement {

    scoreText

    onInitialize(engine) {
        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.addChild(this.label)
        this.label.text = `Score: ${this.scene.score}`

    }

    onPreUpdate() {
        this.updateScore()
    }

    updateScore() {
        this.label.text = `Score: ${this.scene.score}`
        // console.log("update")
    }

}
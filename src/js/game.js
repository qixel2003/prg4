import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Kachow } from './lightning.js'
import { Shark } from './shark.js'
import { Background } from './background.js'
import { Platform } from './platform.js'
import { Level } from './level.js'
import { Level2 } from './level2.js'
import { GameOver } from './game_over.js'
import { LevelClear } from './levelclear.js'
import { Intro } from './intro.js'



const options = {
    width: 800, height: 600,
    backgroundColor: Color.Black,
    displayMode: DisplayMode.FitScreen,
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 800),
    }
}

export class Game extends Engine {

    constructor() {
        super(options)
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('intro', new Intro())
        this.add('level', new Level())
        this.add('level2', new Level2())
        this.add('gameover', new GameOver())
        this.add('levelclear', new LevelClear())
        this.goToScene('intro')
        // this.goToScene('level')
    }
}


new Game()

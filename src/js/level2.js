import '../css/style.css';
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, BoundingBox, SolverStrategy, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Fish } from './fish.js';
import { Kachow } from './lightning.js';
import { Shark } from './shark.js';
import { Background } from './background.js';
import { Platform } from './platform.js';
import { Coin } from './coin.js';
import { Door } from './door.js';
import { Enemy } from './enemy.js';
import { UI } from './ui.js';

export class Level2 extends Scene {
    onInitialize(engine) {
        this.startLevel();
    }

    onActivate(ctx) {
        console.log("reset the level");
        this.resetGame();
        this.startLevel(); // Re-initialize the level
    }

    startLevel() {
        this.score = 0;
        console.log("start the game!");

        this.createBackground(100, 100);
        this.createBackground(800, 100);
        this.createPlatform();
        this.createCoin(100, 500);
        this.createCoin(300, 500);
        this.createCoin(400, 350);
        this.createCoin(400, 250);
        this.createCoin(600, 350);
        this.createCoin(800, 350);
        this.createCoin(900, 350);
        this.createCoin(1100, 350);
        this.createDoor(1850, 600);
        this.createShark();
        this.createEnemy(600, 580);
        this.createEnemy(800, 580);
        this.createEnemy(1200, 580);
        // this.createEnemy(1300, 580);
        this.createEnemy(1450, 580);

        this.ui = new UI();
        this.add(this.ui);

        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });

        // this.add(this.label);
        // this.label.text = `Score: ${this.score}`;
    }

    onPreUpdate(engine) {
        // Add any necessary updates per frame here
    }

    createShark() {
        const shark = new Shark(200, 400);
        this.add(shark);
        this.camera.strategy.lockToActor(shark);
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200));
    }

    createBackground(x, y) {
        const bg = new Background(x, y);
        this.add(bg);
    }

    createPlatform() {
        for (let i = 0; i < 30; i++) {
            const platform = new Platform(i * 191, 730);
            this.add(platform);
        }
    }

    createCoin(x, y) {
        const coin = new Coin(x, y);
        this.add(coin);
    }

    createDoor(x, y) {
        const door = new Door(x, y);
        this.add(door);
    }

    createEnemy(x, y) {
        const enemy = new Enemy(x, y);
        this.add(enemy);
    }

    addPoint() {
        this.score++;
        this.label.text = `Score: ${this.score}`;
    }

    resetGame() {
        // Clear all existing actors
        this.actors.forEach(actor => {
            this.remove(actor);
        });

        // Reset game state variables
        this.score = 0;
    }
}
new Level2
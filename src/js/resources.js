import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Lightning: new ImageSource('images/lightning.png'),
    Shark: new ImageSource('images/shark.png'),
    Background: new ImageSource('images/cloud1.webp'),
    Platform: new ImageSource('images/platform.png'),
    Coin: new ImageSource('images/coin.png'),
    Door: new ImageSource('images/door.jpg'),
    Enemy: new ImageSource('images/enemy.png'),
    IntroBackground: new ImageSource('images/intro.png'),
    GameoverBackground: new ImageSource('images/gameover.png'),
    LevelClear: new ImageSource('images/levelclear.jpg')

}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Lightning,
    Resources.Shark,
    Resources.Background,
    Resources.Platform,
    Resources.Coin,
    Resources.Door,
    Resources.Enemy,
    Resources.IntroBackground,
    Resources.GameoverBackground,
    Resources.LevelClear
])

export { Resources, ResourceLoader }
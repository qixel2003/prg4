import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Background } from './background'
import { Platform } from './platform'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Lightning: new ImageSource('images/lightning.png'),
    Shark: new ImageSource('images/shark.png'),
    Background: new ImageSource('images/cloud1.png'),
    Platform: new ImageSource('images/platform.png'),
    Coin: new ImageSource('images/coin.png'),
    Door: new ImageSource('images/door.jpg')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Lightning,
    Resources.Shark,
    Resources.Background,
    Resources.Platform,
    Resources.Coin,
    Resources.Door
])

export { Resources, ResourceLoader }
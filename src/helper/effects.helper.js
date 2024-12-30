import {isWinter} from "@/helper/time.helper.js";
import SnowFall from "snow-fall-effect";

/**
 * init snowfall on a component if it's winter now
 */
export function initShowFall() {
    if (isWinter()) {
        const config = {
            density: 10
        }
        const snowfall = new SnowFall(config)
        snowfall.init()
    }
}
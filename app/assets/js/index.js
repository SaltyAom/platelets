/**
 * ? platelets.fun was nice. But it was down so I re-created it.  
 * ! It's not platelets we need, but is platelets we deserved.
 */

/**
 * Resources lists
 */
const sprites = [
		require("/app/assets/sprite/platelets_0.jpg"),
		require("/app/assets/sprite/platelets_1.jpg")
	],
	response = [
		new Audio(require("/app/assets/audio/platelets_0.ogg")),
		new Audio(require("/app/assets/audio/platelets_1.ogg"))
	],
	platelets = document.getElementById("platelets")

/**
 * Attach events to observer (listener).
 * @param {HTMLElement} observer - Observer to be event attached.
 * @param {Function} callback - Event callback.
 * @param {Array.<HTMLElementEventMap>} events - Events listener name.
 */
const attachEvent = (observer, callback, events) =>
	events.map(event =>
		observer.addEventListener(event, () => callback(), true)
	)

/**
 * Return platelets to normal state.
 */
const calm = () => (platelets.src = sprites[0])

/**
 * Interact with platelets event.
 */
const interact = () => {
    if (typeof music === "undefined") playMusic()
    platelets.src = sprites[1]
    
    return response[Math.random() > 0.5 ? 0 : 1].play()
}

/**
 * Use to check background music
 */
let music

/**
 * Play react's noise and background music.
 */
const playMusic = () => {
    music = new Audio(require("/app/assets/audio/platelets_music.ogg"))
    
    music.play()
    music.addEventListener("ended",() => {
        this.currentTime = 0
        this.play()
    }, false)
    
	return music
}

/**
 * Attach events
 */
document.addEventListener("DOMContentLoaded", () => {
	let preImage = require("pre-image")
	sprites.map(sprite => preImage(sprite))

    attachEvent(platelets, interact, ["mousedown", "touchstart"])
    attachEvent(platelets, calm, ["mouseup", "touchend"])
})
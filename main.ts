let lautstaerke = 0
basic.forever(function () {
    lautstaerke = input.soundLevel()
    if (lautstaerke > 180) {
        basic.setLedColor(0xff0000)
    } else if (lautstaerke > 75) {
        basic.setLedColor(0xffff00)
    } else {
        basic.setLedColor(0x00ff00)
    }
    basic.pause(100)
})

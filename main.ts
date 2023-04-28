let sound_2 = 0
let sound = 0
pins.digitalWritePin(DigitalPin.P3, 1)
if (pins.digitalReadPin(DigitalPin.P10) == 1) {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P3, 0)
    sound = 1
    servos.P0.setRange(70, 110)
    servos.P0.run(100)
    basic.pause(5000)
    servos.P0.stop()
    sound = 0
    sound_2 = 1
    basic.pause(5000)
    sound_2 = 0
    sound = 1
    servos.P0.setRange(70, 110)
    servos.P0.run(-100)
    basic.pause(5000)
    servos.P0.stop()
    sound = 0
    pins.digitalWritePin(DigitalPin.P3, 1)
} else {
    basic.showIcon(IconNames.No)
}
basic.forever(function () {
    if (sound == 1) {
        while (true) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        while (true) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 100)
        }
    } else {
        music.stopAllSounds()
    }
    if (sound_2 == 1) {
        while (true) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        while (true) {
            music.playMelody("C5 C C5 C C5 C C5 C ", 100)
        }
    } else {
        music.stopAllSounds()
    }
})

pins.digitalWritePin(DigitalPin.P3, 1)
if (pins.digitalReadPin(DigitalPin.P10) == 1) {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    servos.P0.setRange(70, 110)
    servos.P0.run(100)
    basic.pause(5000)
    servos.P0.stop()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    servos.P0.setRange(70, 110)
    servos.P0.run(-100)
    basic.pause(5000)
    servos.P0.stop()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
} else {
    basic.showIcon(IconNames.No)
}

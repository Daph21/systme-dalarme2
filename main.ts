OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P0)
pins.digitalWritePin(DigitalPin.P9, 0)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        OLED.writeString("Niveau est bon!")
        basic.pause(100)
        OLED.newLine()
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        OLED.writeString("Besoin d'eau!")
        basic.pause(100)
        OLED.newLine()
    }
})

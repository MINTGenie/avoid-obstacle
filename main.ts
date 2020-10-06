/**
 * Make the Maqueen to move around the room and avoid obstacles. 
 * 
 *  - whenever Maqueen sees an obstacle closer than 10 cms, it has to backup while turning right (just a little) and then continue moving forward again.
 * 
 *  - It has to play a tone while it is moving backwards. (use "Play tone" block only - not "Play melody" block)
 * 
 *  - The neopixel leds in the front have to be white when moving forward and the neopixels in the back have to be red while moving backwards
 */
let ultra = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
music.setVolume(30)
basic.forever(function () {
    basic.pause(100)
    ultra = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (ultra < 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 35)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
})

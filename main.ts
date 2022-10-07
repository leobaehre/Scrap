input.onPinPressed(TouchPin.P1, function () {
    basic.pause(500)
    servos.P0.setAngle(10)
    basic.pause(500)
    servos.P0.setAngle(120)
    counter += 1
    if (counter == 1) {
        basic.showLeds(`
            # . # . #
            # # # # #
            . . . . .
            . # . # .
            # . . . #
            `)
    } else if (counter == 2) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (counter == 3) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (counter == 4) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            . . . . .
            `)
    } else {
        counter = 0
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            # # . # #
            . . . . .
            `)
    }
})
let counter = 0
counter = 0
servos.P0.setAngle(120)
basic.showLeds(`
    . . . . .
    . # # # .
    . . . . .
    # # . # #
    . . . . .
    `)

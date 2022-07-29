radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    serialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    led.stopAnimation()
    if (signal < -95) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (signal < -80) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Square)
        if (signal > -50 && beacons.indexOf(serialNumber) < 0) {
            beacons.push(serialNumber)
            game.addScore(1)
            basic.showNumber(game.score())
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
})
let serialNumber = 0
let signal = 0
let beacons: number[] = []
beacons = [0]
radio.setGroup(1)

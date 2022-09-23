let Loggin = false
input.onButtonPressed(Button.A, function () {
    Loggin = !(Loggin)
    if (Loggin) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
loops.everyInterval(5000, function () {
    if (Loggin) {
        datalogger.log(
        datalogger.createCV("Temp", input.temperature()),
        datalogger.createCV("Ligth", input.lightLevel())
        )
    }
})

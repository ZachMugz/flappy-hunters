controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -55
    mySprite.vx = -40
})
info.onCountdownEnd(function () {
    info.changeScoreBy(1)
    info.startCountdown(0.25)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -55
    mySprite.vx = 40
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile.destroy()
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f . f . . . . f . 
    . f . . . f . f f . . . . . f . 
    . f f f . . . f . f . . f f f . 
    . f . f . f . f . . f . f . f . 
    . f f f . f . f . . f . f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 200
mySprite.ax = 0
scene.setBackgroundColor(1)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
info.setLife(20)
info.startCountdown(0.25)
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . b f f f f f f f . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -100, 0)
    projectile.setPosition(randint(160, 160), randint(0, 120))
})

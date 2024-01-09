controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Uga_Booga = game.askForNumber("Enter random num", 2)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Call the Vigenere function, passing in the encryption key, the encrypted image, and "false" to indicate that you want the image to be decrypted.
    Vigenere(mySprite, mySprite, false, 1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Call the Vigenere function, passing in the encryption key, the image to be encrypted, and "true" to indicate that you want the image encrypted.
    Vigenere(mySprite, mySprite, true, 1)
})
// doe what's inside.
function Vigenere (passwordcolors: Sprite, imagemessage: Sprite, encode: boolean, Uga_Booga_2: number) {
    // basically an index
    pIndex = 0
    // changes color for height of sprite
    for (let row = 0; row <= imagemessage.height - 1; row++) {
        // changes color for width of sprite
        for (let column = 0; column <= imagemessage.width - 1; column++) {
            // determines to encrypt or decrypt and changes the color
            if (encode) {
                imagemessage.image.setPixel(column, row, (imagemessage.image.getPixel(column, row) + Uga_Booga) % 16)
            } else {
                imagemessage.image.setPixel(column, row, (imagemessage.image.getPixel(column, row) - Uga_Booga + 16) % 16)
            }
            pIndex += 10
            if (pIndex >= passwordcolors.width) {
                pIndex = 0
            }
        }
        pause(1)
    }
}
// starts program.
let pIndex = 0
let Uga_Booga = 0
let mySprite: Sprite = null
// This is the image to encode or decode
mySprite = sprites.create(assets.image`Pizza`, SpriteKind.Player)
mySprite.y = 70
Uga_Booga = game.askForNumber("Enter random num", 2)
game.showLongText("Press 'A' to encrypt 'B' reverse that encryption up to encrypt again", DialogLayout.Center)

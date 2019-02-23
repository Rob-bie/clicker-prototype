export function scaleSprite(sprite, factor) {
    let assetWidth = sprite.width;
    let assetHeight = sprite.height;
    let screenWidth = sprite.scene.game.config.width;
    let screenHeight = sprite.scene.game.config.height;

    let widthScale = (screenWidth * factor / assetWidth);
    let heightScale = (screenHeight * factor / assetHeight);
    let scale = widthScale > heightScale ? widthScale : heightScale;

    sprite.setSize(sprite.width * scale, sprite.height * scale, true);
    sprite.setScale(scale, scale);
}

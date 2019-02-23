export function tapTween(target) {
    return {
        targets: target,
        alpha: 0.33,
        duration: 100,
        ease: 'Sine',
        yoyo: true,
        paused: true
    }
}

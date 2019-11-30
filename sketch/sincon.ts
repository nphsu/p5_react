import p5 from 'p5'

const sincos = (p: p5) => {
    p.setup = () => {
        p.createCanvas(
            p.windowWidth,
            p.windowHeight,
            p.WEBGL)
        p.colorMode(p.HSB, 100)
    }
    p.draw = () => {
        p.background(0)
        for (let i = 0; i < 80; i++) {
            p.fill(50, 55, 100)
            p.translate(10 * p.sin(p.frameCount * 0.1 + i), 10 * p.cos(p.frameCount * 0.1 + i), 50)
            p.sphere(20, 10, 5)
            p.rotateX(p.frameCount * 0.01)
            p.rotateY(p.frameCount * 0.01)
            p.rotateZ(p.frameCount * 0.01)
        }
    }
}

export default sincos
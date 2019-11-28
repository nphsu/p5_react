import p5 from 'p5'

const circle = (p: p5) => {
    p.setup = () => {
    }
    p.draw = () => {
        p.ellipse(50, 50, 80, 80)
    }
}

export default circle
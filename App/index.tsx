import React from 'react'
import sketch from '~sketch/circle'
import Canvas from './Canvas'

const App = () => {
    return (
        <>
            <p>Hello World!</p>
            <Canvas sketch={sketch} />
        </>
    )
}
export default App
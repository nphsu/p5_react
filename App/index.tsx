import React from 'react'
import sketch from '~sketch/circle'
import Canvas from './Canvas'
import Header from './Header'

const App = () => {
    return (
        <>
            <Header/>
            <Canvas sketch={sketch} />
        </>
    )
}
export default App
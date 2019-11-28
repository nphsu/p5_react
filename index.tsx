import * as React from "react"
import { render } from "react-dom"
import App from './App'

const Root = () => {
    return <App/>
}
const rootElement = document.getElementById("root")
render(<Root />, rootElement)

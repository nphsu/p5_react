import React, { useEffect } from "react"
import p5 from 'p5'

const Canvas = (props: any) => {
    useEffect(() => {
        new p5(props.sketch)
    }, [props.sketch])
    return (<></>)
}
export default Canvas
import React, { useEffect } from 'react'

const Error = (props) => {

    useEffect(() => {
        props.showCursor()
    })
    
    return (
        <div className="caret">
            <p className="text-red-400">That command is not recognised.</p>
            <p>Type 'help' and press ENTER to see a list of available commands.</p>
        </div>
    )
}

export default Error
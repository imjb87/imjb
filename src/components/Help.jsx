import { props } from 'bluebird'
import React, { useEffect } from 'react'

const Help = (props) => {

    useEffect(() => {
        props.showCursor()
    })
    
    return (
        <React.Fragment>
            <p>&gt; Type "help" to see this list.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;Available commands:</p>
            <p>&nbsp;&nbsp;"introduction": Displays a welcome message.</p>
        </React.Fragment>
    )
}

export default Help
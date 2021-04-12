import * as React from 'react'
import Typing from 'react-typist'

const Introduction = (props) => {

    return (
        <Typing cursor={{show: false}} onTypingDone={props.showCursor}>
            <p>&gt; Hello, my name is John Bell.</p>
            <p>&gt; You can type "help" and press enter to see a list of available commands.</p>
        </Typing>
    )
}

export default Introduction
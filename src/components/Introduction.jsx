import * as React from 'react'
import Typing from 'react-typist'

const Introduction = (props) => {

    return (
        <Typing className="caret" cursor={{show: false}} onTypingDone={props.showCursor} avgTypingDelay={props.avgTypingDelay}>
            <p className="mb-4">Hello, my name is John Bell. Welcome to my web portfolio.</p>
            <p>Type 'help' and press ENTER to see a list of available commands.</p>
        </Typing>
    )
}

export default Introduction
import React, { useEffect } from 'react'

const Help = (props) => {

    useEffect(() => {
        props.showCursor()
    })
    
    return (
        <div className="caret">
            <p className="mb-4">Type "help" to see this list.</p>
            <p className="mb-4">Available commands:</p>
            <dl className="flex flex-row flex-wrap">
                <dt className="w-full md:w-1/2">"introduction"</dt>
                <dd className="w-full md:w-1/2">Displays a welcome message.</dd>
            </dl>
            <dl className="flex flex-row flex-wrap">
                <dt className="w-full md:w-1/2">"about"</dt>
                <dd className="w-full md:w-1/2">Displays a bit about me.</dd>
            </dl>
            <dl className="flex flex-row flex-wrap">
                <dt className="w-full md:w-1/2">"work"</dt>
                <dd className="w-full md:w-1/2">Displays a bit about my work and who I work for.</dd>
            </dl>
            <dl className="flex flex-row flex-wrap">
                <dt className="w-full md:w-1/2">"clear"</dt>
                <dd className="w-full md:w-1/2">Clears the terminal window of all previous output.</dd>
            </dl>
        </div>
    )
}

export default Help
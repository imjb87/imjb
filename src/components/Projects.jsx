import * as React from 'react'
import Typing from 'react-typist'

const Projects = (props) => {

    return (
        <Typing className="caret" cursor={{show: false}} onTypingDone={props.showCursor} avgTypingDelay={props.avgTypingDelay}>
            <p className="mb-4"><a className="underline" href="https://www.littletikes.co.uk" target="_blank" rel="noreferrer">Little Tikes UK</a></p>
            <p className="mb-4">The UK division of Little Tikes make full use of all our services, including regular web development. I have been involved in seasonal projects such as an interactive Christmas advent calendar, and also provide regular updates to their CMS and provide solutions for API integrations into their internal systems. </p>
        </Typing>
    )
}

export default Projects
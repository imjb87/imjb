import * as React from 'react'
import Typing from 'react-typist'

const About = (props) => {

    return (
        <Typing className="caret" cursor={{show: false}} onTypingDone={props.showCursor} avgTypingDelay={props.avgTypingDelay}>
            <p className="mb-4">I'm a Web Developer with over 10 years experience, based in West Yorkshire, UK.</p>
            <p className="mb-4">I specialise in building web applications and websites, and I make sure that functionality is not a compromise.</p>
            <p className="mb-4">From database modelling, back-end automation and API integration, to beautiful front-end single page applications, I can offer the complete development package.</p>
            <p>Type 'work' and press ENTER to see who I work for.</p>
        </Typing>
    )
}

export default About
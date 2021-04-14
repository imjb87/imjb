import * as React from 'react'
import Typing from 'react-typist'

const Work = (props) => {

    return (
        <Typing className="caret" cursor={{show: false}} onTypingDone={props.showCursor} avgTypingDelay={props.avgTypingDelay}>
            <p className="mb-4">I work as a Senior Web Developer for <a className="underline" href="https://www.thebiggerboat.co.uk" target="_blank">The Bigger Boat</a>.</p>
            <p className="mb-4">We are a specialist web design, development and digital marketing agency located in the heart of West Yorkshire.</p>
            <p className="mb-4">For over 10 years, we have built a portfolio of pretty impressive clients, and managed their websites, social channels and digital marketing.</p>
            <p className="mb-4">As a Senior Web Developer, I am responsible for overseeing the development of new projects and helping to manage retainer work with our existing clients.</p>
            <p>Type 'projects' and press ENTER to see some of the projects I have worked on.</p>
        </Typing>
    )
}

export default Work
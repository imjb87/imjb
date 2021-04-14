import React, { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { useResizeDetector } from 'react-resize-detector';

import Introduction from './Introduction'
import Help from './Help'
import Error from './Error'
import About from './About'
import Work from './Work'
import Projects from './Projects'

const Terminal = () => {

    const avgTypingDelay = 35;

    const inputRef = useRef();
    const scrollRef = useRef();

    const [show, setShow] = useState(false);
    const [state, setState] = useState([{ type: 'component', value: 'introduction' }]);
    const [input, setInput] = useState('');
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBooted(true)
        }, 750)
    }, [booted]);
    
    const AvailableComponents = {
        'introduction': Introduction,
        'help': Help,
        'error': Error,
        'about': About,
        'work': Work,
        'projects': Projects
    }

    const onSubmit = (e) => {
        const text = e.target.value;
        if( e.keyCode === 13 ) {
            setShow(false);
            setState((prevState) => ([...prevState, { type: 'command', value: text }]));

            if( !!AvailableComponents[e.target.value] ) {
                setState((prevState) => ([...prevState, { type: 'component', value: text }]));
            }

            if( text === "clear" ) {
                setState([]);
                setShow(true);
                inputRef.current.focus();
            }

            if( text !== "clear" && !!!AvailableComponents[e.target.value] ) {
                setState((prevState) => ([...prevState, { type: 'component', value: 'error' }]));
            }

            setInput('');
        }
    }

    const onResize = useCallback(() => {
        scrollToBottom()
    }, []);

    const { ref } = useResizeDetector({onResize});

    const showCursor = (value) => {
        if( value === state.length ) {
            setShow(true);
            inputRef.current.focus();
        }
    }

    const scrollToBottom = () => {
        scrollRef.current.scrollIntoView(true);
    }

    const handleChange = (e) => {
        setInput(e.target.value.toLowerCase());
    }

    return (
        <motion.div className="terminal font-mono h-full flex flex-col text-sm md:text-base text-green-400 transform origin-center w-full " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="border-2 border-green-400 px-6 py-4">imjb.dev</div>
            <div className="border-2 border-green-400 border-t-0 flex flex-1 overflow-hidden p-6">
                <div className="flex-1 h-full no-scrollbar overflow-y-scroll">
                    <div className="max-w-screen-md ml-4" ref={ref}>
                    {
                        booted &&
                        state.map((item, index) => {
                            if( item.type === "component" ) {
                                const Component = AvailableComponents[item.value];
                                return (
                                    <Component key={index} showCursor={() => showCursor(index + 1)} avgTypingDelay={avgTypingDelay} />
                                )
                            } else {
                                return <div className="caret" key={index}>{item.value}</div>
                            }
                        })
                    }
                    </div>
                    <div className={`caret ml-4 relative ${show ? "block" : "hidden"}`}>
                        <div className="input absolute left-0 top-0 w-full">{input}</div>
                        <input className="bg-transparent focus:outline-none opacity-0" type="text" onBlur={({ target }) => { target.focus() }} onKeyDown={(e) => onSubmit(e)} onChange={handleChange} autoFocus={true} ref={inputRef} value={input.toLowerCase()}/>
                    </div>
                    <div className="clear-both float-left" ref={scrollRef}></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Terminal
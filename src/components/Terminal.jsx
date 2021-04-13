import React, { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { useResizeDetector } from 'react-resize-detector';

import Introduction from './Introduction'
import Help from './Help'
import Error from './Error'
import About from './About'
import Work from './Work'

const Terminal = () => {

    const inputRef = useRef();
    const scrollRef = useRef();

    const [show, setShow] = useState(false);
    const [state, setState] = useState([{ type: 'component', value: 'introduction' }]);
    
    const AvailableComponents = {
        'introduction': Introduction,
        'help': Help,
        'error': Error,
        'about': About,
        'work': Work
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

            inputRef.current.value = "";
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

    return (
        <motion.div className="font-mono h-full flex flex-col text-base text-green-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="border border-green-400 -mb-px px-6 py-4 rounded-t-lg">imjb.dev</div>
            <div className="border border-green-400 flex flex-1 overflow-hidden p-6 rounded-b-lg">
                <div className="flex-1 h-full no-scrollbar overflow-y-scroll">
                    <div className="max-w-screen-md ml-4" ref={ref}>
                    {
                        state.map((item, index) => {
                            if( item.type === "component" ) {
                                const Component = AvailableComponents[item.value];
                                return (
                                    <Component key={index} showCursor={() => showCursor(index + 1)} />
                                )
                            } else {
                                return <div className="caret" key={index}>{item.value}</div>
                            }
                        })
                    }
                    </div>
                    <div className={`caret ml-4 ${show ? "block" : "hidden"}`}><input className="bg-transparent focus:outline-none w-full" type="text" onBlur={({ target }) => { target.focus() }} onKeyDown={(e) => onSubmit(e)} autoFocus={true} ref={inputRef} /></div>
                    <div className="clear-both float-left" ref={scrollRef}></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Terminal
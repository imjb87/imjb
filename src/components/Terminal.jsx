import React, { useState, useRef } from "react"
import { includes } from 'lodash'

import Introduction from './Introduction'
import Help from './Help'

const Terminal = () => {

    const inputRef = useRef();
    const [show, setShow] = useState(false);

    const [state, setState] = useState([
        {
            type: 'component',
            value: 'introduction'
        }
    ]);
    
    const AvailableComponents = {
        'introduction': Introduction,
        'help' : Help
    }

    const onSubmit = (e) => {
        if( e.keyCode === 13 ) {
            setShow(false);
            updateState({type: 'command', value: e.target.value});
            if( !!AvailableComponents[e.target.value] ) {
                updateState({type: 'component', value: e.target.value});
            }
            inputRef.current.value = "";
        }
    }

    console.log(state)

    const updateState = (props) => {
        setState( oldState => ([
            ...oldState,
            {
                type: props.type,
                value: props.value
            }
        ]))
    }

    const showCursor = () => {
        setShow(true);
        inputRef.current.focus();
    }

    return (
        <div className="font-mono h-full flex flex-col text-base text-green-400">
            <div className="border border-green-400 -mb-px px-3 py-2">IMJB</div>
            <div className="border border-green-400 flex-1 no-scrollbar overflow-y-scroll p-6">
                <div className="max-w-screen-md">
                {
                    state.map((item, index) => {
                        if( item.type === 'component' ) {
                            const Component = AvailableComponents[item.value];
                            return (
                                <Component key={index} showCursor={showCursor} />
                            )
                        } else {
                            return <div key={index}>&gt; {item.value}</div>
                        }
                    })
                }
                </div>
                <div className={`${show ? "block" : "hidden"}`}>&gt; <input className="bg-transparent focus:outline-none" type="text" onBlur={({ target }) => target.focus()} onKeyDown={(e) => onSubmit(e)} autoFocus={true} ref={inputRef} /></div>
            </div>
        </div>
    )
}

export default Terminal
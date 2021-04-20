import React, {useState, useEffect} from 'react';
import {LocationContext} from "../locationContext";

export const ModalMessageContext = React.createContext(null);

export function ModalProvider(props) {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const [buttonsVisible, setButtonsVisible] = useState(false)

    const changeModalState = (obj) => {
        if (obj) {
           let {show, message, buttonsVisible} = {...obj}
        }
    }

    return (
        <ModalMessageContext.Provider>
            {props.children}
        </ModalMessageContext.Provider>
    )

}
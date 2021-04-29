import React, {useState, useEffect} from "react";
import {LocationContext} from "./locationContext";
import * as SecureStore from 'expo-secure-store';

export const ApplicationStateContext = React.createContext(null);
const MY_KEY = 'myKey';

export function ApplicationStateProvider(props) {
    const [loaded, setLoaded] = useState(false)
    const [value, setValue] = useState('')

    useEffect(() => {
    })

    const initialize = async () => {
        const storeValue = await SecureStore.getItemAsync(MY_KEY)
        setValue(storeValue || '')
        setLoaded(true)
    }

    const saveValue = async (value) => {
        await SecureStore.setItemAsync(MY_KEY, value);
    }

    return (
        <ApplicationStateContext.Provider value={{loaded, value, initialize, saveValue}}>
            {props.children}
        </ApplicationStateContext.Provider>
    )

}
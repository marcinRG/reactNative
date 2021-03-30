import React, {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import {Accuracy} from "expo-location";

export const LocationContext = React.createContext(null);

export function LocationProvider(props) {
    const [location, setLocation] = useState(null);

    const watchLocation = async () => {
        let {status} = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        await Location.watchPositionAsync({
            distanceInterval: 4,
            maxAge: 5000,
            requiredAccuracy: Accuracy.Highest
        }, (location)=>{
            console.log('lokacja');
            setLocation(location)
            console.log(location);
        });
        //setLocation(location);
    }

    useEffect(() => {
        let location = watchLocation();
    }, []);

    return (
        <LocationContext.Provider>
            {props.children}
        </LocationContext.Provider>
    )
}
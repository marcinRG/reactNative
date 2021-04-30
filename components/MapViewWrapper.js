import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RelativeContainer} from "./RealtiveContainer";
import {SearchBar} from "./SearchBar";
import {MapPlaceHolder} from "./MapPlaceHolder";
import {LeftBar} from "./LeftBar";
import {AddLocationButton} from "./AddLocationButton";
import {NorthNeedle} from "./NorthNeedle";


export function MapViewWrapper(props) {

    const [showBar, setShowBar] = useState(false)

    const handleToggleShowBar = () => {
        setShowBar(!showBar)
    }

    return (
        <RelativeContainer>
            <View style={styles.backGroundContainer}>
                <SearchBar></SearchBar>
                <MapPlaceHolder>
                </MapPlaceHolder>
            </View>
            <NorthNeedle></NorthNeedle>
            <LeftBar showBar={showBar}></LeftBar>
            <AddLocationButton action={handleToggleShowBar}></AddLocationButton>
        </RelativeContainer>
    );
}

const styles = StyleSheet.create({
    backGroundContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 0,
        position: 'relative'
    }
});
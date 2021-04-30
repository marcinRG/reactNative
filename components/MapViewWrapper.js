import React, {Component} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {RelativeContainer} from "./RealtiveContainer";
import {SearchBar} from "./SearchBar";
import {MapPlaceHolder} from "./MapPlaceHolder";
import {LeftBar} from "./LeftBar";
import {AddLocationButton} from "./AddLocationButton";
import {NorthNeedle} from "./NorthNeedle";


export function MapViewWrapper(props) {

    const dimensions = useWindowDimensions();
    console.log('dimensions.width')
    console.log(dimensions.width)
    console.log('dimensions.height')
    console.log(dimensions.height)

    return (
        <RelativeContainer>
            <View style={styles.backGroundContainer}>
                <SearchBar></SearchBar>
                <MapPlaceHolder>
                </MapPlaceHolder>
            </View>
            <NorthNeedle></NorthNeedle>
            <LeftBar></LeftBar>
            <AddLocationButton></AddLocationButton>
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
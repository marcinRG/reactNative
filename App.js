import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert, Image} from 'react-native';
import {SearchBar} from "./components/SearchBar";
import {LeftBar} from "./components/LeftBar";
import {RelativeContainer} from "./components/RealtiveContainer";
import {MapPlaceHolder} from "./components/MapPlaceHolder";
import {NorthNeedle} from "./components/NorthNeedle";
import {AddLocationButton} from "./components/AddLocationButton";

export default function App() {
    console.log('run');
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    backGroundContainer: {
        width: '100%',
        height: '100%',
        paddingTop: 35,
        paddingHorizontal: 0,
        position: 'relative'
    },
    imgStyle: {
        width: '100%',
        height: '100%'
    }
});

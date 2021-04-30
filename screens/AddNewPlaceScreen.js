import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationWrapper} from "../components/NavigationWrapper/NavigationWrapper";
import {MapViewWrapper} from "../components/MapViewWrapper";

export function AddNewPlaceScreen(props) {
    return (
        <NavigationWrapper navigation={props.navigation}>
            <MapViewWrapper></MapViewWrapper>
        </NavigationWrapper>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    }
});
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function AddNewPlaceScreen(props) {
    return (
        <View style={styles.centeredView}>
            <Text>Add new place screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fcff7d',
    }
});
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function EditPlaceScreen(props) {
    return (
        <View style={styles.centeredView}>
            <Text>Edit place screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f8aeff',
    }
});
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationWrapper} from "../components/NavigationWrapper/NavigationWrapper";

export function EditPlaceScreen(props) {
    return (
        <NavigationWrapper navigation={props.navigation}>
            <View style={styles.centeredView}>
                <Text>Edit place screen</Text>
            </View>
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
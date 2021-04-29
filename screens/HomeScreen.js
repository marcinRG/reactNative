import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationWrapper} from "../components/NavigationWrapper/NavigationWrapper";
import * as Application from 'expo-application';

export function HomeScreen(props) {
    return (
        <NavigationWrapper navigation={props.navigation}>
            <View style={styles.centeredView}>
                <Text style={styles.textHeader}>Application info</Text>
                <Text style={styles.textLabel}>Id:</Text>
                <Text style={styles.text}>{Application.androidId}</Text>
                <Text style={styles.textLabel}>Build version:</Text>
                <Text style={styles.text}>{Application.nativeBuildVersion}</Text>
                <Text style={styles.textLabel}>App name:</Text>
                <Text style={styles.text}>{Application.applicationName}</Text>
            </View>
        </NavigationWrapper>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: 'white',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textLabel: {
        backgroundColor: 'whitesmoke',
        marginTop: 5,
        marginBottom: 2,
        fontSize: 10,
    },
    text: {
        fontSize: 15,
        paddingVertical: 5
    }
});
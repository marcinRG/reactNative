import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {placeTypes} from "../const/placeTypes";
import {Pin} from "./Pin";

export class LeftBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.leftBarStyle}>
                <Pin text="Ledge" icon={placeTypes.LEDGE}></Pin>
                <Pin text="Gap" icon={placeTypes.GAP}></Pin>
                <Pin text="Rail" icon={placeTypes.RAIL}></Pin>
                <Pin text="Other" icon={placeTypes.OTHER}></Pin>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    leftBarStyle: {
        width: 80,
        paddingVertical: 40,
        backgroundColor: 'rgba(255, 255, 255, .85)',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 170,
        borderRadius: 40,
        elevation: 4,

    }
});
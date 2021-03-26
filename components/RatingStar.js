import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {starTypes} from "../const/starTypes";

export function RatingStar(props) {
    const handlePress = () => {
        if (props.action) {
            props.action(props.id);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.starContainer}><Text
            style={styles.txt}>{getText(props.starType, props.selected, props.id)}</Text>
        </TouchableOpacity>
    );
}

function getText(starType, selected, id) {
    switch (starType) {
        case starTypes.CIRCLE : {
            if (id <= selected) {
                return '\u2B24'
            }
            return '\u25EF'
        }
        case starTypes.STAR : {
            if (id <= selected) {
                return '\u2605'
            }
            return '\u2606'
        }
    }
}

const styles = StyleSheet.create({
    starContainer: {
        flex: 1,
        alignSelf: 'center',
        maxWidth: 35,
    },
    txt: {
        color: '#FF633B',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center'
    }
});
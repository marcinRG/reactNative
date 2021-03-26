import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";


export function LocationDetails(props) {
    const maxRating = 5;
    return (
        <View style={styles.spotDetails}>
            <Text style={styles.textLabel}>Name</Text>
            <Text style={styles.textField}>{props.details.name}</Text>
            <Text style={styles.textLabel}>Type</Text>
            <Text style={styles.textField}>{props.details.type}</Text>
            <Text style={styles.textLabel}>Location</Text>
            <Text style={styles.textField}>{props.details.location}</Text>
            <Rating max={maxRating} starType={starTypes.CIRCLE} title="Kickout"
                    selected={props.details.kickOut}></Rating>
            <Rating max={maxRating} starType={starTypes.STAR} title="Rating" selected={props.details.rating}></Rating>
        </View>
    );

}

const styles = StyleSheet.create({

    spotDetails: {
        marginTop: 15,
    },

    textLabel: {
        marginTop: 5,
        marginBottom: 2,
        fontSize: 10,
    },

    textField: {
        marginBottom: 5,
        backgroundColor: 'whitesmoke',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 5

    }
});
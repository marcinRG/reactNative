import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {placeTypes} from "../const/placeTypes";
import {Pin} from "./Pin";

export function LeftBar(props) {

    const [showBar, setShowBar] = useState(false)
    const topPosition = useRef(new Animated.Value(450)).current

    const handleButtonPress = (placeType) => {
        setShowBar(!showBar)
    }

    const toggleBar = (toPosition) => {
        Animated.timing(topPosition, {
            toValue: toPosition,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        let lastPosition = 450
        if (showBar) {
            lastPosition = 0
        }
        toggleBar(lastPosition)

    }, [showBar])

    return (

        <View style={styles.barContainer}>
            <Animated.View style={[
                styles.leftBarStyle, {transform: [{translateY: topPosition}]},
            ]}>
                <Pin text="Ledge" icon={placeTypes.LEDGE}></Pin>
                <Pin text="Gap" icon={placeTypes.GAP}></Pin>
                <Pin text="Rail" icon={placeTypes.RAIL}></Pin>
                <Pin text="Other" icon={placeTypes.OTHER}></Pin>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    barContainer: {
        position: 'absolute',
        width: 80,
        overflow: 'hidden',
        right: 10,
        top: 70,
        height: 450,
    },
    leftBarStyle: {
        width: 80,
        paddingVertical: 40,
        backgroundColor: 'rgba(255, 255, 255, .85)',
        alignItems: 'center',
        borderRadius: 40,
        elevation: 4,
    },

});
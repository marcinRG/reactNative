import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, useWindowDimensions} from 'react-native';
import {placeTypes} from "../const/placeTypes";
import {Pin} from "./Pin";

const fromBottom = 70
const topOffset = 165
const refenceHeight = 684

export function LeftBar(props) {

    const screenHeight = useWindowDimensions().height;
    const topPosition = useRef(new Animated.Value((screenHeight - (fromBottom + topOffset)))).current;

    const rescale = () => {
        if (screenHeight < refenceHeight) {
            return {
                scale: screenHeight / refenceHeight
            }
        }
    }


    const toggleBar = (toPosition) => {
        Animated.timing(topPosition, {
            toValue: toPosition,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        let lastPosition = (screenHeight - (fromBottom + topOffset))
        if (props.showBar) {
            lastPosition = 0
        }
        toggleBar(lastPosition)

    }, [props.showBar])

    return (

        <View style={[styles.barContainer, {height: screenHeight - (fromBottom + topOffset)}]}>
            <Animated.View style={[
                styles.leftBarStyle, {transform: [{translateY: topPosition},rescale()]},
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
        bottom: fromBottom,
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
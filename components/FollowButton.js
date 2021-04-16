import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

export function FollowButton(props) {
    return (
        <View style={styles.FollowButton}>
            <TouchableOpacity>
                {getImage(props.follow)}
            </TouchableOpacity>
        </View>
    )
}

function getImage(isFollowed) {
    if (isFollowed) {
        return (
            <Image
                style={styles.imgStyle}
                source={require('../assets/mapAssets/heart-full.png')}
            ></Image>
        )
    }
    return (
        <Image
            style={styles.imgStyle}
            source={require('../assets/mapAssets/heart.png')}
        ></Image>)
}

const styles = StyleSheet.create({
    FollowButton: {
        alignItems: 'center',
        width: 40,
        justifyContent: 'center'
    },
    imgStyle: {
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    }
})



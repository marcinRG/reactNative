import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

const directions = {
    UP: 'up',
    DOWN: 'down'
}

export function UpDownPosition(props) {

    const onArrowPress = (direction) => {

    }

    return (
        <View style={styles.upDownSelector}>
            <TouchableOpacity onPress={() => onArrowPress(directions.UP)}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/mapAssets/arrow-up.png')}
                ></Image>
            </TouchableOpacity>

            <Text style={{fontSize: 25, color: '#FD9668'}}>{props.postion}</Text>
            <TouchableOpacity onPress={() => onArrowPress(directions.DOWN)}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/mapAssets/arrow-down.png')}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    upDownSelector: {
        width: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgStyle: {
        width: 30,
        height: 15,
        resizeMode: 'stretch'
    }
})
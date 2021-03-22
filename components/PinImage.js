import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {placeTypes} from "../const/placeTypes";

export class PinImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.pinImageStyle}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/strzalka.png')}
                />
                {createSmallIcon(this.props.icon)}
            </View>
        )
    }
}

function createSmallIcon(placeType) {
    switch (placeType) {
        case placeTypes.RAIL: {
            return <Image
                style={styles.imgIconStyle}
                source={require('./../assets/rail.png')}/>
        }
        case placeTypes.OTHER: {
            return <Image
                style={styles.imgIconStyle}
                source={require('./../assets/other.png')}
            />
        }
        case placeTypes.DIY: {
            return <Image
                style={styles.imgIconStyle}
                source={require('./../assets/dyi.png')}
            />
        }
        case placeTypes.USER: {
            return <Image
                style={styles.imgIconStyle}
                source={require('./../assets/user.png')}
            />
        }
        case placeTypes.GAP: {
            return <Image
                style={styles.imgIconStyle}
                source={require('./../assets/gap.png')}
            />
        }
        case placeTypes.LEDGE: {
            return <Image
                style={styles.imgIconStyle}
                source={require('./../assets/ledge.png')}
            />
        }
    }
}


const styles = StyleSheet.create({
    pinImageStyle: {
        height: 60,
        width: 60,
        position: 'relative',

    },
    imgStyle: {
        height: 58,
        width: 40,
        position: 'absolute',
        top: 0,
        left: 10
    },
    imgIconStyle: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 5,
        left: 15
    },
});
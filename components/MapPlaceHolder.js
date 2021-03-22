import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export class MapPlaceHolder extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.mapPlaceHolderStyle}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/map.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
        mapPlaceHolderStyle: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        },
        imgStyle: {
            width: '100%',
            height: '100%'
        }
    }
);
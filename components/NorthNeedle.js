import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

export class NorthNeedle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.NorthNeedleContainer}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/arrow.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
        NorthNeedleContainer: {
            width: 80,
            height: 80,
            backgroundColor: '#fff',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 60,
            right: 10,
            elevation: 5,
        },
        imgStyle: {
            width: 20,
            height: 33,
        }
    }
);
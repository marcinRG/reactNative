import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export class AddLocationButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.ButtonContainer}>
                    <Image
                        style={styles.imgStyle}
                        source={require('./../assets/add_button.png')}
                    />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
        ButtonContainer: {
            width: 80,
            height: 80,
            backgroundColor: '#cdcdcd',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 60,
            right: 10,
            elevation: 5,
        },
        imgStyle: {
            width: 30,
            height: 30,
        }
    }
);
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export function AddLocationButton(props) {

    const handlePressButton = () => {
        props.action()
    }

    return (
        <TouchableOpacity style={styles.ButtonContainer} onPress={handlePressButton}>
            <Image
                style={styles.imgStyle}
                source={require('./../assets/add_button.png')}
            />
        </TouchableOpacity>
    );
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
            bottom: 30,
            right: 10,
            elevation: 5,
        },
        imgStyle: {
            width: 30,
            height: 30,
        }
    }
);
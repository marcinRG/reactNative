import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {PinImage} from "./PinImage";

export class Pin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.pinStyle}>
                {this.props.icon && <PinImage icon={this.props.icon}></PinImage>}
                {this.props.text && <Text style={styles.txt}>{this.props.text}</Text>}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    pinStyle: {
        minWidth: 60,
        alignItems: 'center',
        marginBottom: 15,
    },
    txt: {
        fontSize: 12
    }
});
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export class RelativeContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.relativeContainerView}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    relativeContainerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    }
}

);
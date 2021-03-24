import React, {Component} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';


export class ModalMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal>{this.props.children}</Modal>
        );
    }
};

const styles = StyleSheet.create({
});
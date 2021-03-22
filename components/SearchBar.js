import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.searchBarView}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/lupa.png')}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Search places"
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBarView: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f9',
        height: 55,
        alignItems: 'center',
        paddingHorizontal: 10,
        // borderBottomColor: '#545151',
        // borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6
    },
    textInputStyle: {
        marginLeft: 10,
        maxWidth: '90%',
        fontSize: 15
    },
    imgStyle: {
        height: 17,
        width: 17
    }

});
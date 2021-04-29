import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native';

export function NavigationWrapper(props) {

    const goHome = () => {
        props.navigation.navigate('Home')
    }

    const goAdd = () => {
        props.navigation.navigate('AddPlace')
    }

    const goEdit = () => {
        props.navigation.navigate('EditPlace')
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.container}>
                {props.children}
            </View>

            <View style={styles.menu}>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#D3D3D3" style={styles.button}
                                    onPress={() => goHome()}>
                    <Text style={styles.text}>&#8962; Home</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#D3D3D3" style={styles.button}
                                    onPress={() => goAdd()}>
                    <Text style={styles.text}>&#10040; Add item</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#D3D3D3" style={styles.button}
                                    onPress={() => goEdit()}>
                    <Text style={styles.text}>&#9998; Edit item</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.6} underlayColor="#D3D3D3" style={styles.button}
                                    onPress={() => {console.log('not implemented')}}>
                    <Text style={styles.text}>&#9881; Settings</Text>
                </TouchableHighlight>



            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },

    menu: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#e9e9e9',
        justifyContent: 'flex-start',
        elevation: 1
    },

    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'green'
    },

    button: {
        justifyContent: 'center'
    },

    text: {
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 12,
    }

});
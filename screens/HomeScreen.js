import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export function HomeScreen(props) {
    return (
        <View style={styles.centeredView}>
            <Text>Home screen</Text>
            <Button
                title="Go to add"
                onPress={() => props.navigation.navigate('AddPlace')}
            />
            <Button
                title="Go to edit"
                onPress={() => props.navigation.navigate('EditPlace')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    }
});
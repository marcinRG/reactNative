import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert, Image} from 'react-native';
import {MapView} from "./components/MapView";
import {placeTypes} from "./const/placeTypes";

export default function App() {
    console.log('run app');
    return (
        <View>
            <View>
                <Pin icon={placeTypes.DOT}></Pin>
                <Text>Lorem ipsum</Text>
            </View>
            <View>
                <Button title="No"></Button>
                <Button title="Yes"></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});

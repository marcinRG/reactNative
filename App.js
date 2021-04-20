import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "./screens/HomeScreen";
import {AddNewPlaceScreen} from "./screens/AddNewPlaceScreen";
import {EditPlaceScreen} from "./screens/EditPlaceScreen";

const Stack = createStackNavigator()

export default function App() {

    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}></Stack.Screen>
                <Stack.Screen name="AddPlace" component={AddNewPlaceScreen} options={{title: "Add"}}></Stack.Screen>
                <Stack.Screen name="EditPlace" component={EditPlaceScreen} options={{title: "Edit"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    }
});

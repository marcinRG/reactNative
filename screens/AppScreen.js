import 'react-native-gesture-handler';
import React, {useEffect, useContext} from 'react';
import {ApplicationStateContext} from "../context/appState";
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./HomeScreen";
import {AddNewPlaceScreen} from "./AddNewPlaceScreen";
import {EditPlaceScreen} from "./EditPlaceScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()

export function AppScreen(props) {

    const appContext = useContext(ApplicationStateContext)

    useEffect(() => {
        (async function init() {
            try {
                await appContext.initialize()
            } catch {
                console.log('error')
            }

        })()
    }, [])
    return (
        <>
            {appContext.loaded && <NavigationContainer initialRouteName="Home">
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#c3c3c3',
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}></Stack.Screen>
                    <Stack.Screen name="AddPlace" component={AddNewPlaceScreen} options={{
                        title: 'Add',
                        headerStyle: {
                            backgroundColor: '#f8aeff',
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}></Stack.Screen>
                    <Stack.Screen name="EditPlace" component={EditPlaceScreen} options={{
                        title: 'Edit place',
                        headerStyle: {
                            backgroundColor: '#fcff7d',
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>}
            {!appContext.loaded &&
            <View style={styles.centeredView}>
                <Text>App loading...</Text>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'magenta',
    }
});
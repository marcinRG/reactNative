import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {StyleSheet, View, Button, Dimensions, Text} from 'react-native';
import MapView from 'react-native-maps';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AddNewLocation} from "./components/AddNewLocation";
import {ShowLocationDetails} from "./components/ShowLocationDetails";
import {ModalMessage} from "./components/ModalMessage";
import {LocationProvider} from "./context/locationContext";
import {ModalProvider} from "./context/modalContext/modalContext";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {

    const [showAddModal, setShowAddModal] = useState(false);
    const buttonPressHandler2 = () => {
        setShowAddModal(true);
    }

    const hideAddLocationModal = () => {
        setShowAddModal(false);
    }

    const [showDetailsModal, setDetailsModal] = useState(false);
    const buttonPressHandler3 = () => {
        setDetailsModal(true);
    }

    const hideDetailsModal = () => {
        setDetailsModal(false);
    }


    const [showMsgModal, setMsgModal] = useState(false);
    const buttonPressHandler4 = () => {
        setMsgModal(true);
    }
    const hideMsgModal = () => {
        setMsgModal(false);
    }


    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <ModalProvider>
                    <View style={styles.centeredView}>
                        <Text>Jakiś tekst</Text>
                    </View>
                </ModalProvider>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    mapView: {
        //flex: 1,
        backgroundColor: 'magenta',
        alignItems: 'center',
        justifyContent: 'center',
        width: 500,
        height: 500
    },
    map: {
        width: '60%', //Dimensions.get('window').width,
        height: '60%', //Dimensions.get('window').height,
        alignSelf: 'center'
    },
});

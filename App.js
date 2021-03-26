import React, {useState, useRef} from 'react';
import {StyleSheet, View, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';


import {AddNewLocation} from "./components/AddNewLocation";
import {ShowLocationDetails} from "./components/ShowLocationDetails";
import {ModalMessage} from "./components/ModalMessage";

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
        <View style={styles.centeredView}>
            <ModalMessage show={showMsgModal} showButtons={true} message={"to jest jakaś wiadomość do wyświetlenia"}
                          action={hideMsgModal}></ModalMessage>
            <AddNewLocation show={showAddModal} backAction={hideAddLocationModal}></AddNewLocation>
            <ShowLocationDetails show={showDetailsModal} backAction={hideDetailsModal}></ShowLocationDetails>
            <Button title="pokaz modal Location details" onPress={buttonPressHandler3}></Button>
            <Button title="pokaz modal add Location" onPress={buttonPressHandler2}></Button>
            <Button title="pokaz modal msg" onPress={buttonPressHandler4}></Button>
        </View>
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

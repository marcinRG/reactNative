import React, {useState, useRef} from 'react';
import {StyleSheet,View, Button} from 'react-native';

import {AddNewLocation} from "./components/AddNewLocation";
import {ShowLocationDetails} from "./components/ShowLocationDetails";

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

        return (
        <View style={styles.centeredView}>
            <AddNewLocation show={showAddModal} backAction={hideAddLocationModal}></AddNewLocation>
            <ShowLocationDetails show={showDetailsModal} backAction={hideDetailsModal}></ShowLocationDetails>
            <Button title="pokaz modal add Location" onPress={buttonPressHandler2} style={{marginBottom: 5}}></Button>
            <Button title="pokaz modal Location details" onPress={buttonPressHandler3}></Button>
        </View>
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

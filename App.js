import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert, Image, TouchableOpacity} from 'react-native';
import {MapView} from "./components/MapView";
import {placeTypes} from "./const/placeTypes";
import {LinearGradient} from 'expo-linear-gradient';
import {Pin} from "./components/Pin";
import {ModalMessage} from "./components/ModalMessage";

export default function App() {
    const [visibleModal, changeVisibleModal] = useState(false);

    const handleModalAction = (modalAnswer) => {
        changeVisibleModal(false);
        console.log(modalAnswer);
    }

    const buttonPressHandler = () => {
        console.log('buttonPressed');
        changeVisibleModal(true);
    }

    return (
        <View style={styles.appStyle}>
            <ModalMessage show={visibleModal} action={handleModalAction}
                          message="To jest jakaś wiadomość" showButtons={true}></ModalMessage>
            <View>
                <Text>Lorem ipsum</Text>
                <Button title="press button"
                        onPress={buttonPressHandler}
                ></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
});

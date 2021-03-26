import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";

export function ShowLocationDetails(props) {

    const [showSpot, changeShowSpot] = useState(true);

    const backActionHandler = () => {
        if (props.backAction) {
            props.backAction();
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.show}
            statusBarTranslucent={true}>
            <View style={styles.containerStyle}>
                <View style={styles.formStyle}>
                    <View style={styles.titleView}>
                        <TouchableOpacity onPress={backActionHandler}>
                            <Text style={styles.buttonBack}>&#8249;</Text>
                        </TouchableOpacity>
                        <Text style={styles.textTitle}>Location details</Text>
                    </View>
                    <View style={styles.tabSelectionContainer}>
                        <TouchableOpacity style={styles.selectionButton} onPress={()=>{changeShowSpot(true)}}>
                            <Text style={styles.buttonText}>Spot</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectionButton} onPress={()=>{changeShowSpot(false)}}>
                            <Text style={styles.buttonText}>Ranking</Text>
                        </TouchableOpacity>
                    </View>
                    {showSpot && <View style={styles.spotDetails}>
                        <Text style={styles.textLabel}>Name</Text>
                        <Text style={styles.textField}>Name</Text>
                        <Text style={styles.textLabel}>Type</Text>
                        <Text style={styles.textField}>Type</Text>
                        <Text style={styles.textLabel}>Location</Text>
                        <Text style={styles.textField}>Location</Text>
                        <Rating max={5} starType={starTypes.CIRCLE} title="Kickout" selected={1}></Rating>
                        <Rating max={5} starType={starTypes.STAR} title="Rating" selected={4}></Rating>
                    </View>}

                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 25,
        backgroundColor: 'white'
    },

    formStyle: {
        width: '90%',
        backgroundColor: 'white'
    },

    titleView: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'white'
    },

    buttonBack: {
        fontSize: 30
    },

    textTitle: {
        fontSize: 24,
        marginLeft: 5
    },

    tabSelectionContainer: {
        elevation: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: "stretch",
        backgroundColor: 'white'
    },

    selectionButton: {
        flex: 1,
        justifyContent: 'center'
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },

    spotDetails: {
        marginTop: 15,
    },

    textLabel: {
        marginTop: 5,
        marginBottom: 2,
        fontSize: 10,
    },

    textField: {
        marginBottom: 5,
        backgroundColor: 'whitesmoke',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 5

    }


});
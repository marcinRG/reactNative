import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";
import MapView from "react-native-maps";
import {placeTypes} from "../const/placeTypes";
import {LocationDetails} from "./LocationDetails";
import {LocationRanking} from "./LocationRanking";

export function ShowLocationDetails(props) {
    const maxRating = 5;
    const [showSpot, changeShowSpot] = useState(true);
    const [locationDetails,setLocationDetails] = useState({
        name: 'Lorem ipsum',
        type: placeTypes.DIY,
        location: 'Wrocław, dolnośląskie',
        kickOut: 2,
        rating: 4
    })

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
                            <Text style={styles.buttonBack}>&#8249;&#8249;</Text>
                        </TouchableOpacity>
                        <Text style={styles.textTitle}>Location details</Text>
                    </View>
                    <View style={styles.tabSelectionContainer}>
                        <TouchableOpacity style={styles.selectionButton} onPress={()=>{changeShowSpot(true)}}>
                            <Text style={getStyle(showSpot)}>Spot</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectionButton} onPress={()=>{changeShowSpot(false)}}>
                            <Text style={getStyle(!showSpot)}>Ranking</Text>
                        </TouchableOpacity>
                    </View>
                    {showSpot && <LocationDetails details={locationDetails}></LocationDetails>}
                    {!showSpot && <LocationRanking></LocationRanking>}
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            loadingEnabled={true}
                            initialRegion={{
                                latitude: 51.109225603920585,
                                longitude: 17.035311295831104,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                        </MapView>
                    </View>


                </View>
            </View>
        </Modal>
    );

}

function getStyle(boolValue) {
    let styleTab = [styles.buttonText]
    if (boolValue) {
        styleTab.push(styles.buttonTextSelected);
    }
    return styleTab;
}

const styles = StyleSheet.create({
    map: {
        width: '100%', //Dimensions.get('window').width,
        height: '100%', //Dimensions.get('window').height,
    },

    mapContainer: {
        paddingVertical: 10,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%'
    },

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
        fontSize: 30,
        minWidth: 30
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
        fontWeight: 'bold',
        color: 'black'
    },

    buttonTextSelected: {
        color: '#FF633B'
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
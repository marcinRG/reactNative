import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Image, ScrollView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {places} from "../const/places";
import {CustomPicker} from "./CustomPicker";
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";
import MapView from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';


export function AddNewLocation(props) {

    const [image, setImage] = useState(null);

    const openImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({ localUri: pickerResult.uri });
    }


    const [kickOutRating, changeKickOutRating] = useState(3);
    const handleKickOutChange = (id) => {
        changeKickOutRating(id);
    }

    const [ratingRating, changeRatingRating] = useState(0);
    const handleRatingChange = (id) => {
        changeRatingRating(id);
    }

    const [selectedPlace, setSelectedPlace] = useState('');
    const changeSelectedPlace = (placeValue) => {
        const found = places.find((elem) => {
            return elem.value === placeValue;
        });
        if (found) {
            setSelectedPlace(found.value);
        }
    }

    const saveButtonHandler = () => {

    }

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
                    <ScrollView>
                        <View style={styles.titleView}>
                            <TouchableOpacity onPress={backActionHandler}>
                                <Text style={styles.buttonBack}>&#8249;&#8249;</Text>
                            </TouchableOpacity>
                            <Text style={styles.textTitle}>Add new spot</Text>
                        </View>
                        <View style={styles.addPictures}>
                            <TouchableOpacity onPress={openImage}>
                                <LinearGradient colors={['#FF633B', '#FD9668']}
                                                style={styles.buttonAddPictures}
                                                start={{x: 0, y: 0.5}}
                                                end={{x: 1, y: 0.5}}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>&#65291;</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            {image && <Image
                                source={{ uri: image.localUri }}
                                style={styles.imgThumbnail}
                            ></Image>}
                            {!image && <Text>add some pictures</Text>}
                        </View>
                        <TextInput placeholder="Name" style={styles.textInputStyle}></TextInput>
                        <CustomPicker items={places} selectedValue={selectedPlace} showPlaceholder={true}
                                      placeholderLabel={"wybierz coś ..."} action={changeSelectedPlace}></CustomPicker>
                        <TextInput placeholder="Location" style={styles.textInputStyle}></TextInput>
                        <TextInput placeholder="Other text input"  multiline={true} numberOfLines={4} style={styles.textInputStyle}></TextInput>
                        <Rating max={5} starType={starTypes.CIRCLE} title="Kickout" selected={kickOutRating}
                                action={handleKickOutChange}></Rating>
                        <Rating max={5} starType={starTypes.STAR} title="Rating" selected={ratingRating}
                                action={handleRatingChange}></Rating>

                        <TouchableOpacity onPress={saveButtonHandler}>
                            <LinearGradient colors={['#FF633B', '#FD9668']}
                                            style={styles.buttonStyle}
                                            start={{x: 0, y: 0.5}}
                                            end={{x: 1, y: 0.5}}>
                                <Text style={{color: 'white', textAlign: 'center', fontWeight: "bold"}}>Save</Text>
                            </LinearGradient>
                        </TouchableOpacity>
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
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );

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
        width: '100%',
        minHeight: 300
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

    addPictures: {
        backgroundColor: 'whitesmoke',
        marginVertical: 10,
        height: 70,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
    },

    imgThumbnail: {
       height: 40,
       width: 40
    },

    buttonAddPictures: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 10
    },

    textInputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 15,
        backgroundColor: 'white',
        marginVertical: 5
    },

    buttonStyle: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        margin: 5,
        elevation: 3,
        borderRadius: 10
    },

});
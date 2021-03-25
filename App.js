import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {MapView} from "./components/MapView";
import {placeTypes} from "./const/placeTypes";
import {Pin} from "./components/Pin";
import {ModalMessage} from "./components/ModalMessage";
import {LinearGradient} from "expo-linear-gradient";
import {Rating} from "./components/Rating";
import {starTypes} from "./const/starTypes";

export default function App() {

    const inputRef = useRef(null);
    const [kickoutRating, changeKickoutRating] = useState(3);
    const [ratingRating, changeRatingRating] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleKickOutChange = (id) => {
        console.log(id);
        changeKickoutRating(id);
    }

    const handleRatingChange = (id) => {
        console.log(id);
        changeRatingRating(id);
    }

    const buttonPressHandler = () => {
        console.log('buttonPressed');
        inputRef.current.measure((fx, fy, width, height, px, py) => {
            console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to frame: ' + fx)
            console.log('Y offset to frame: ' + fy)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)
        });
    }

    return (
        <View style={styles.appStyle}>
            <View style={styles.form}>
                <Text>Add new spot</Text>
                <View style={styles.addPictures}></View>
                <TextInput placeholder="Name" style={styles.textInputStyle}></TextInput>
                <TextInput placeholder="Type" style={styles.textInputStyle} ref={inputRef}></TextInput>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 10,
                    //paddingVertical: 10,
                    //paddingHorizontal: 15,
                    fontSize: 15,
                    backgroundColor: 'white',
                    marginVertical: 5
                }}>
                    <Picker
                        selectedValue={selectedLanguage}
                        mode="dialog"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Search By..." value=""/>
                        <Picker.Item label="Java" value="java"/>
                        <Picker.Item label="JavaScript" value="js"/>
                    </Picker>
                </View>
                <Rating max={5} starType={starTypes.STAR} title="Kickout" selected={kickoutRating}
                        action={handleKickOutChange}></Rating>
                <Rating max={5} starType={starTypes.CIRCLE} title="Rating" selected={ratingRating}
                        action={handleRatingChange}></Rating>
                <TouchableOpacity onPress={buttonPressHandler}>
                    <LinearGradient colors={['#FF633B', '#FD9668']}
                                    style={styles.buttonStyle}
                                    start={{x: 0, y: 0.5}}
                                    end={{x: 1, y: 0.5}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    addPictures: {
        backgroundColor: 'whitesmoke',
        marginVertical: 10,
        height: 50
    },
    buttonStyle: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        margin: 5,
        elevation: 3,
        borderRadius: 10
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
    form: {
        width: '90%',
        backgroundColor: 'white'
    },
    appStyle: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 25
    },
    txt: {
        color: '#FD9668',
        fontSize: 20
    }
});

import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {Pin} from "./Pin";
import {placeTypes} from "../const/placeTypes";
import {answers} from "../const/answers";


export function ModalMessage(props) {

    const doAction = (answer) => {
        if (props.action) {
            props.action(answer);
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.show}
            statusBarTranslucent={false}>
            <View style={styles.centeredView}>
                <View style={styles.msgContainer}>
                    <View style={styles.msg}>
                        <View style={styles.pinStyle}><Pin icon={placeTypes.DOT}></Pin></View>
                        <Text style={styles.msgText}>{props.message}</Text>
                    </View>
                    {props.showButtons && <View style={styles.btnContainer}>
                        <TouchableOpacity style={[styles.buttonStyle, styles.buttonNo]}
                                          onPress={() => {
                                              doAction(answers.NO)
                                          }}
                        ><Text>No</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            doAction(answers.YES)
                        }}>
                            <LinearGradient colors={['#FF633B', '#FD9668']}
                                            style={styles.buttonStyle}
                                            start={{x: 0, y: 0.5}}
                                            end={{x: 1, y: 0.5}}>
                                <Text style={{color: 'white'}}>Yes</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    msgContainer: {
        borderRadius: 20,
        elevation: 5,
        width: '90%',
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .15)',
        backgroundColor: 'white'
    },
    msgText: {
        paddingLeft: 15
    },
    msg: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        paddingLeft: 25,
        position: 'relative'
    },
    pinStyle: {
        transform: [{scale: .5}],
        position: 'absolute',
        top: -20,
        left: -10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    buttonStyle: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        margin: 5,
        elevation: 3,
        borderRadius: 5
    },
    linearGradient: {
        flex: 1
    },
    buttonNo: {
        backgroundColor: 'white',
    },
    buttonYes: {
        backgroundColor: 'red',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
});
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


export function RankingSpot(props) {
    return (
        <View style={styles.rankingDetails}>
            {getImage(props.place)}
            <View style={styles.userDetails}>
                <Image
                    style={styles.imgUser}
                    source={require('./../assets/user-icon.jpg')}>
                </Image>
                <Text style={styles.userText}>{props.name}</Text>
                <Text style={styles.trickText}>{props.trick}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <LinearGradient colors={['#FF633B', '#FD9668']}
                                    style={styles.buttonShow}
                                    start={{x: 0, y: 0.5}}
                                    end={{x: 1, y: 0.5}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 25}}>&#x2023;</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>
    );
}

function getImage(place) {
    switch (place) {
        case 1: {
            return (
                <Image
                    style={styles.imgTrophy}
                    source={require('./../assets/cup-golden.png')}
                ></Image>);
        }
        case 2: {
            return (
                <Image
                    style={styles.imgTrophy}
                    source={require('./../assets/cup-silver.png')}
                ></Image>);
        }
        case 3: {
            return (
                <Image
                    style={styles.imgTrophy}
                    source={require('./../assets/cup-bronze.png')}
                ></Image>);
        }
        default: {
            break;
        }
    }
}

const styles = StyleSheet.create({
    imgUser: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },

    imgTrophy: {
        width: 30,
        height: 30,
        marginLeft: 2,
        marginRight: 10
    },

    buttonShow: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 10
    },

    rankingDetails: {
        height: 60,
        borderRadius: 15,
        marginBottom: 10,
        paddingHorizontal: 5,
        width: '100%',
        backgroundColor: '#F5F5F9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    userDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    userText: {
        color: '#000',
        marginHorizontal: 10
    },
    trickText: {
        color: '#5A5A5A',
        marginHorizontal: 20
    }

});
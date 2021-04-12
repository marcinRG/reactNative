import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";
import {Pin} from "./Pin";


export function LocationDetails(props) {
    const maxRating = 5;
    return (
        <View style={styles.spotDetails}>
            <Text style={styles.textLabel}>Name and description</Text>
            <View style={styles.titleContainer}>
                <View style={styles.upDownSelector}>
                    <Text style={{color: '#ff633b', fontSize: 20}}>&#9650;</Text>
                    <Text style={{fontSize: 15}}>5</Text>
                    <Text style={{color: '#ff633b', fontSize: 20}}>&#9660;</Text>
                </View>
                <View style={styles.titleText}>

                    <Text style={{fontSize: 25}}>{props.details.name}</Text>
                    <Text style={styles.addressText}>{props.details.description}</Text>
                </View>
                <View style={styles.favorites}>
                    <Image
                        style={{width: 30, height: 30, resizeMode: 'stretch'}}
                        source={require('./../assets/mapAssets/heart.png')}
                    ></Image>
                </View>
            </View>

            <View style={styles.additionalInfo}>
                <View style={styles.infoWrapper}>
                    <Image
                        style={{width: 16, height: 10, resizeMode: 'stretch'}}
                        source={require('./../assets/mapAssets/eye.png')}
                    ></Image>
                    <Text>50</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Image
                        style={{width: 16, height: 10, resizeMode: 'stretch'}}
                        source={require('./../assets/mapAssets/add-friend.png')}
                    ></Image>
                    <Text>12</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Image
                        style={{width: 16, height: 10, resizeMode: 'stretch'}}
                        source={require('./../assets/mapAssets/like.png')}
                    ></Image>
                    <Text>10</Text>
                </View>
            </View>

            <Text style={styles.textLabel}>Type and address</Text>
            <View style={styles.typeAndAddressContainer}>
                <View style={{justifyContent: 'center'}}>
                    <Pin icon={props.details.type}></Pin>
                </View>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressText}>{props.details.address}</Text>
                    <Text style={styles.addressText}>{props.details.region}</Text>
                    <Text style={styles.addressText}>{props.details.country}</Text>
                </View>
            </View>

            <Rating max={maxRating} starType={starTypes.CIRCLE} title="Kickout"
                    selected={props.details.kickOut}></Rating>
            <Rating max={maxRating} starType={starTypes.STAR} title="Rating" selected={props.details.rating}></Rating>
        </View>
    );

}

const styles = StyleSheet.create({
    infoWrapper: {
       flexDirection: 'row'
    },

    additionalInfo: {
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
        minHeight: 20
    },

    favorites: {
        alignItems: 'center',
        width: 50,
        justifyContent: 'center'
    },

    titleText: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5
    },

    titleContainer: {
        backgroundColor: 'whitesmoke',
        flexDirection: 'row'
    },

    upDownSelector: {
        width: 45,
        alignItems: 'center',
        //backgroundColor:'magenta',
        justifyContent: 'center'
    },

    addressText: {
        marginVertical: 4,
        marginHorizontal: 3,
        fontSize: 15
    },

    typeAndAddressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'whitesmoke',
    },

    addressContainer: {
        paddingVertical: 10,
        flex: 1,
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
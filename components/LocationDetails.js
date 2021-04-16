import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";
import {Pin} from "./Pin";
import {UpDownPosition} from "./UpDownPosition";
import {FollowButton} from "./FollowButton";
import {UserInfo} from "./UserInfo";
import {iconTypes, InfoIcon} from "./InfoIcon";


export function LocationDetails(props) {
    const maxRating = 5;
    return (
        <View style={styles.spotDetails}>
            <View style={styles.nameInfoContainer}>
                <View style={styles.titleContainer}>
                    <UpDownPosition postion={25}></UpDownPosition>
                    <View style={styles.titleText}>
                        <Text style={{fontSize: 25}}>{props.details.name}</Text>
                        <Text style={styles.descriptionText}>{props.details.description}</Text>
                    </View>
                    <FollowButton follow={false}></FollowButton>
                </View>


                <View style={styles.typeAndAddressContainer}>
                    <View style={{justifyContent: 'center'}}>
                        <Pin text={'Other'} icon={props.details.type}></Pin>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressText}>{props.details.address}</Text>
                        <Text style={styles.addressText}>{props.details.region}</Text>
                        <Text style={styles.addressText}>{props.details.country}</Text>
                    </View>
                </View>

                <View style={styles.additionalIcons}>
                    <InfoIcon type={iconTypes.DATE} text={'2021-04-08'}></InfoIcon>
                    <InfoIcon type={iconTypes.VIEWS} text={10}></InfoIcon>
                    <InfoIcon type={iconTypes.FOLLOWERS} text={10}></InfoIcon>
                    <InfoIcon type={iconTypes.LIKES} text={10}></InfoIcon>
                </View>

                <View style={styles.ownerContainer}>
                    <UserInfo showAddtionalText={true} additonalText={'created by'} showUserName={false}
                              user={{name: 'userXXX', img: './../assets/user-icon.jpg'}}></UserInfo>
                </View>

            </View>

            <View style={styles.rankingsContainer}>
                <Rating max={maxRating} starType={starTypes.CIRCLE} title="Kickout"
                        selected={props.details.kickOut}></Rating>
                <Rating max={maxRating} starType={starTypes.STAR} title="Rating"
                        selected={props.details.rating}></Rating>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    rankingsContainer: {
        marginVertical: 30,
        padding: 20,
        elevation: 1,
        backgroundColor: 'white',
        borderColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 10,
    },

    nameInfoContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        //paddingVertical: 10,
        padding: 10,
        elevation: 1,
        borderColor: 'whitesmoke',
        borderWidth: 1
    },


    ownerContainer: {

        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 5
    },

    additionalIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minHeight: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },


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
        paddingHorizontal: 10,
    },

    titleContainer: {
        flexDirection: 'row',
    },

    upDownSelector: {
        width: 45,
        alignItems: 'center',
        //backgroundColor:'magenta',
        justifyContent: 'center'
    },

    descriptionText: {
        marginVertical: 4,
        marginHorizontal: 3,
        fontSize: 14,
        textAlign: 'justify'
    },

    addressText: {
        marginVertical: 4,
        marginHorizontal: 10,
        fontSize: 14,
        textAlign: 'justify'
    },

    typeAndAddressContainer: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    addressContainer: {
        paddingVertical: 10,
        //paddingLeft: 10,
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
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Rating} from "./Rating";
import {starTypes} from "../const/starTypes";
import MapView, {Marker} from "react-native-maps";
import {placeTypes} from "../const/placeTypes";
import {LocationDetails} from "./LocationDetails";
import {LocationRanking} from "./LocationRanking";
import {Pin} from "./Pin";
import {LocationComments} from "./LocationComments";
//import {ScrollView} from "react-native-web";

export function ShowLocationDetails(props) {
    const maxRating = 5;
    const [selectedTab, setSelectedTab] = useState(0)
    const [showSpot, changeShowSpot] = useState(true);
    const [locationDetails, setLocationDetails] = useState({
        type: placeTypes.LEDGE,
        address: "Smolnik Rębiechów 1",
        region: "Powiat lubański, Lower Silesia",
        country: "Poland",

        description: "Lorem ipsum lorem costam costam dług tekst",
        created_date: "2021-04-08T22:42:26.587543",
        name: 'Lorem ipsum',

        kickOut: 2,
        rating: 4,
        mapLocation: {
            latitude: 51.03088014175027,
            latitudeDelta: 0.0045000000000000005,
            longitude: 15.255562998354435,
            longitudeDelta: 0.0045000000000000005,
        },
        posts_list: [
            {
                id: 724,
                likes: 0,
                owner_name: "john2412021-04-06T19:53:33.359004Z",
                title: "typewriters, funding2410",
            },
            {
                id: 725,
                likes: 0,
                owner_name: "john2412021-04-06T19:53:33.359004Z",
                title: "word2411",
            },
            {
                id: 726,
                likes: 0,
                owner_name: "john2412021-04-06T19:53:33.359004Z",
                title: "cautions2412",
            },
        ]


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
                        <TouchableOpacity style={styles.selectionButton} onPress={() => {
                            setSelectedTab(0)
                        }}>
                            <Text style={getStyle(selectedTab === 0)}>Spot</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectionButton} onPress={() => {
                            setSelectedTab(1)
                        }}>
                            <Text style={getStyle(selectedTab === 1)}>Ranking</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.selectionButton} onPress={() => {
                            setSelectedTab(2)
                        }}>
                            <Text
                                style={getStyle(selectedTab === 2)}>{getPostsTitle(locationDetails.posts_list)}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.selectionButton} onPress={() => {
                            setSelectedTab(3)
                        }}>
                            <Text style={getStyle(selectedTab === 3)}>Images</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView>
                        {(selectedTab === 0) && <LocationDetails details={locationDetails}></LocationDetails>}
                        {(selectedTab === 1) && <LocationRanking></LocationRanking>}
                        {(selectedTab === 2) && <LocationComments details={locationDetails}></LocationComments>}
                        <View style={styles.mapContainer}>
                            <MapView
                                style={styles.map}
                                loadingEnabled={true}
                                region={{
                                    ...locationDetails.mapLocation
                                }}>
                                <Marker coordinate={{
                                    latitude: locationDetails.mapLocation.latitude,
                                    longitude: locationDetails.mapLocation.longitude

                                }}>
                                    <Pin text={locationDetails.name} icon={placeTypes.DOT}></Pin>
                                </Marker>
                            </MapView>
                        </View>
                    </ScrollView>


                </View>
            </View>
        </Modal>
    );

}

function getPostsTitle(posts) {
    let title = 'Comments'
    if (posts.length > 0) {
        title = title + '(' + posts.length + ')'
    }
    return title
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
        height: 300,
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
        backgroundColor: 'white',
        flex: 1
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
        color: 'black',
        fontSize: 12
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
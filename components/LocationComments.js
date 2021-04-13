import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export function LocationComments(props) {
    return (
        <View>
            <View style={styles.commentsContainer}>
                <View style={styles.comment}>
                    <TouchableOpacity style={[styles.userAvatar, styles.userAvatarDirectionToRight]}>
                        <Image style={styles.avatarImage}
                               source={require('./../assets/mapAssets/user.png')}></Image>
                        <Text style={styles.avatarTxt}>username</Text>
                    </TouchableOpacity>

                    <View style={styles.userComment}>
                        {getDecorationImage(0)}
                        <View style={styles.commentContent}>
                            <Text>
                                Lorem ipsum costam costam and so on... Lorem ipsum costam costam
                                and so on... Lorem ipsum costam costam and so on... Lorem ipsum costam costam and so
                                on...
                            </Text>
                            <View style={styles.likes}>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.comment}>
                    <TouchableOpacity style={[styles.userAvatar, styles.userAvatarDirectionToLeft]}>
                        <Image style={styles.avatarImage}
                               source={require('./../assets/mapAssets/user.png')}></Image>
                        <Text style={styles.avatarTxt}>username</Text>
                    </TouchableOpacity>

                    <View style={styles.userComment}>
                        {getDecorationImage(1)}
                        <View style={styles.commentContent}>
                            <Text>
                                Lorem ipsum costam costam and so on... Lorem ipsum costam costam
                                and so on... Lorem ipsum costam costam and so on... Lorem ipsum costam costam and so
                                on...
                            </Text>
                            <View style={styles.likes}>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.comment}>
                    <TouchableOpacity style={[styles.userAvatar, styles.userAvatarDirectionToRight]}>
                        <Image style={styles.avatarImage}
                               source={require('./../assets/mapAssets/user.png')}></Image>
                        <Text style={styles.avatarTxt}>username</Text>
                        <View style={styles.likes}>

                        </View>
                    </TouchableOpacity>

                    <View style={styles.userComment}>
                        {getDecorationImage(0)}
                        <View style={styles.commentContent}>
                            <Text>
                                Lorem ipsum costam costam and so on... Lorem ipsum costam costam
                                and so on... Lorem ipsum costam costam and so on... Lorem ipsum costam costam and so
                                on...
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
            <View>
                <TextInput placeholder="Add comment" style={styles.textInputStyle} numberOfLines={5}></TextInput>
                <TouchableOpacity>
                    <LinearGradient colors={['#FF633B', '#FD9668']}
                                    style={styles.buttonStyle}
                                    start={{x: 0, y: 0.5}}
                                    end={{x: 1, y: 0.5}}>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: "bold"}}>Add comment</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function getDecorationImage(number) {
    if (number % 2 === 0) {
        return (<Image style={[styles.commentDecoration, styles.commentDecorationLeft]}
                       source={require('./../assets/mapAssets/tail.png')}></Image>)
    }
    return (
        <Image style={[styles.commentDecoration, styles.commentDecorationRight]}
               source={require('./../assets/mapAssets/tail-l.png')}></Image>
    )
}

const styles = StyleSheet.create({
    likes: {},

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

    comment: {
        backgroundColor: 'whitesmoke',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 2,
        elevation: 1
    },

    userAvatar: {
        alignItems: 'center'
    },

    avatarImage: {
        marginHorizontal: 5,
        width: 35,
        height: 35
    },

    avatarTxt: {
        color: '#FF633B'
    },

    userAvatarDirectionToRight: {
        flexDirection: 'row'
    },

    userAvatarDirectionToLeft: {
        flexDirection: 'row-reverse'
    },

    commentsContainer: {
        paddingVertical: 20
    },

    userComment: {
        position: 'relative',
        paddingTop: 9
    },

    commentDecoration: {
        width: 10,
        height: 9,
        position: 'absolute',
        top: 5
    },
    commentDecorationLeft: {
        left: 20
    },
    commentDecorationRight: {
        right: 20
    },

    commentContent: {
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 20,
        elevation: 1
    },
    buttonStyle: {
        paddingVertical: 20,
        //paddingHorizontal: 10,
        marginVertical: 5,
        elevation: 3,
        borderRadius: 10
    }

})
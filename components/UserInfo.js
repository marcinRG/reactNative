import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

export function UserInfo(props) {
    const handleOnUserPress = () => {
    }

    return (
        <TouchableOpacity style={styles.UserContainer} onPress={handleOnUserPress}>
            {props.showAddtionalText && <Text style={styles.textStyle}>{props.additonalText}</Text>}
            <View style={styles.userDetails}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/user-icon.jpg')}
                ></Image>
                {props.showUserName && <Text style={styles.userName}>{props.user.name}</Text>}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    UserContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //paddingHorizontal: 5
    },
    imgStyle: {
        margin: 2,
        width: 30,
        borderRadius: 15,
        height: 30
    },
    textStyle: {
        fontSize: 9,
        color: '#FD9668',
        marginRight: 5
    },
    userName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF633B'
    },
    userDetails: {
        alignItems: 'center'

    }
})


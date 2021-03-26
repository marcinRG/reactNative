import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RatingStar} from "./RatingStar";

export function Rating(props) {
    return (
        <View style={styles.ratingContainer}>
            <Text style={styles.txtTitle}>{props.title}</Text>
            <View style={styles.starsRow}>
                {createStars(props.max, props.selected, props.starType, props.action)}
            </View>
        </View>
    );
}

function createStars(starMaxCount, selected, starType, action) {
    let stars = [];
    for (let i = 1; i <= starMaxCount; i++) {
        let star = <RatingStar key={i} id={i} starType={starType} selected={selected} action={action}></RatingStar>;
        stars.push(star);
    }
    return stars;
}

const styles = StyleSheet.create({
    ratingContainer: {
        backgroundColor: 'white',
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginVertical: 5
    },
    txtTitle: {
        backgroundColor: 'white',
        color: '#989898',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        fontWeight: '200',
        flex: 1,
        alignSelf: 'center'
    },
    starsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 3
    }
});
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RankingSpot} from "./RankingSpot";

export function LocationRanking(props) {
    const user = {
        name: 'ipsum',
        trick: 'kickflip180',
        place: 1
    }

    return (
        <View style={styles.rankingContainer}>
            <RankingSpot place={1} name={user.name} trick={user.trick}></RankingSpot>
            <RankingSpot place={2} name={user.name} trick={user.trick}></RankingSpot>
            <RankingSpot place={3} name={user.name} trick={user.trick}></RankingSpot>
            <RankingSpot place={4} name={user.name} trick={user.trick}></RankingSpot>
        </View>
    );

}

const styles = StyleSheet.create({

    rankingContainer: {
        backgroundColor: '#fff',
        marginTop: 15,
    },
});
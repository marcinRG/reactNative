import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export const iconTypes = {
  DATE: 'date',
  VIEWS: 'views',
  FOLLOWERS: 'followers',
  LIKES: 'likes',
}

export function InfoIcon(props) {
  return (
    <View style={styles.infoIconWrapper}>
      {getImage(props.type)}
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

function getImage(iconType) {
  switch (iconType) {
    case iconTypes.DATE: {
      return <Image
        style={styles.imgIconStyle}
        source={require('../assets/mapAssets/calendar.png')} />
    }
    case iconTypes.FOLLOWERS: {
      return <Image
        style={styles.imgIconStyle}
        source={require('../assets/mapAssets/followers.png')}
      />
    }
    case iconTypes.LIKES: {
      return <Image
        style={styles.imgIconStyle}
        source={require('../assets/mapAssets/like.png')}
      />
    }
    case iconTypes.VIEWS: {
      return <Image
        style={styles.imgIconStyle}
        source={require('../assets/mapAssets/eye.png')}
      />
    }
  }
}

const styles = StyleSheet.create({
  imgIconStyle: {
    width: 15,
    height: 15,
    resizeMode: 'stretch'
  },
  infoIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 8
  },
  text: {
    marginLeft: 2,
    fontWeight: '100',
    fontSize: 9,
    color: '#FD9668'
  }
})


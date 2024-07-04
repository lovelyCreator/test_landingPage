import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground, View, Text, StatusBar, StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {vh, vw} from 'react-native-css-vh-vw';

const CustomCard = ({image, text}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.graph}>
          <Text
          style={{
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            bottom: vw(5),
            left: vw(5),
            width: vw(22.5),
            justifyContent: 'center',
            height: vw(10),
            backgroundColor: '#ea3839',
            color: 'white',
            padding: 10,
            borderRadius: 10
          }}>
            {text}
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    width: vw(85),
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  graph: {
    width: vw(80),
    height: vh(25),
  },
  imageContainer: {
    borderRadius: 10,
    width: vw(80),
    height: vh(25),
    overflow: 'hidden'
  }
});

export default CustomCard;
  
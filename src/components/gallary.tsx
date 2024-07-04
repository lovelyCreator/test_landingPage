import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground, View, Text, StatusBar, StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {vh, vw} from 'react-native-css-vh-vw';

const Gallary = ({
  image,
  time,
  title,
  subTitle,
  follower,
  rate,
  rateNumber,
  cheapPrice,
  price,
}: {
  image: any;
  time: string;
  title: string;
  subTitle: string;
  follower: string;
  rate: string;
  rateNumber: number;
  cheapPrice: string;
  price: string;
}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View>
                <View style={styles.imageContainer}>
                    <ImageBackground source={image} style={styles.graph}>
                    <Text
                    style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        alignItems: 'center',
                        bottom: vw(0),
                        right: vw(0),
                        width: vw(22.5),
                        justifyContent: 'center',
                        height: vw(10),
                        backgroundColor: '#00000030',
                        color: 'white',
                        padding: 10,
                    }}>
                        {time}
                    </Text>
                    </ImageBackground>
                    <View style={{}}>
                      <View style = {{padding: vw(5), paddingBottom: 0}}>
                        <Text style = {styles.title}>{title}</Text>
                        <Text style = {styles.subTitle}>{subTitle}</Text>
                      </View>
                        <View style={{flexDirection: 'row', gap: 20, marginTop: 10, paddingBottom: 20, width: '100%', borderBottomWidth: 1, borderBottomColor: '#00000030', paddingLeft: vw(5)}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source = {require('../../assets/images/icon1.png')}
                                            style = {{width: vw(4), height: vw(4)}}
                                />
                                <Text style = {styles.text}>{follower}</Text>
                            </View>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source = {require('../../assets/images/icon2.png')}
                                            style = {{width: vw(4), height: vw(4)}}
                                />
                                <Text style={styles.text}>{`${rate} (${rateNumber})`}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: vw(5), paddingTop: vw(3), gap: 10}}>
                            <Text style={{fontWeight: '500', color: 'black', fontSize: vw(4)}}>{cheapPrice}</Text>
                            <Text style={{fontWeight: '500', fontSize: vw(4),textDecorationLine: 'line-through'}}>{price}</Text>
                        </View>
                    </View>
                </View>
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
    height: vh(20),
  },
  imageContainer: {
    borderRadius: 10,
    width: vw(80),
    height: vh(45),
    overflow: 'hidden',
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 3, // Shadow radius
    elevation: 3, // Elevation for Android devices
  },
  title: {
    color: 'black',
    fontSize: vw(5),
    paddingBottom: 15,
    fontWeight: '450'
    // padding: 10,
  },
  subTitle: {
    color: 'black',
    fontSize: vw(4),
    paddingBottom: 10,
    fontWeight: '450'
    // padding: 10,
  },
  
});

export default Gallary;
  
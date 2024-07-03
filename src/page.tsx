import React from 'react';
import {View, ScrollView, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import {vh, vw} from 'react-native-css-vh-vw';

const LandingPage = () => {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{}}>
            <ImageBackground source={require('../assets/images/image3.png')} style={styles.landingImage}>
                <Text style={styles.subtitle}>Valentina Teinitzer</Text>
                <Text style={styles.maintitle}>Floral Design and Botanical Set Design</Text>
            </ImageBackground>
            <View style={{backgroundColor: '#ffffff', flexDirection: 'row', width: vw(80), justifyContent: 'space-evenly', alignItems: 'center', gap: 20, margin: 30, border: 1, borderColor: 'black'}}>
                <View style={{flexDirection: 'column', justifyContent: 'left'}}>
                    <Image source={require('../assets/images/1.png')} />
                    <Text style={{fontSize: vw(2), paddingTop: 10}}>Start your journey to creative growth.</Text>
                </View>
                <Image source={require('../assets/images/2.png')} />
            </View>
            <View style = {styles.recommended}>  
                <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(4.44), paddingRight: vw(5)}}>
                    <Text style = {styles.title}>
                        SH
                    </Text>
                    <Text style = {styles.viewAll}>
                        View All
                    </Text>
                </View>                  
                <FlatList
                    data={cardArray}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <CustomCard

                        />
                    }
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    landingImage: {
        width: vw(101),
        height: vh(45),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    subtitle: {
        color: 'white',
        fontSize: vw(5),
        paddingBottom: 10,
        // padding: 10,
    },
    maintitle: {
        color: 'white',
        fontSize: vw(7),
        textAlign: 'center'
        // padding: 10,
    },
    recommended: {
        width: vw(95),
        marginLeft: vw(5)
    },
})

export default LandingPage;
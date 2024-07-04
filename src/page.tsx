import React, {useState, useRef, createRef} from 'react';
import {View, ScrollView, Text, Image, ImageBackground, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {vh, vw} from 'react-native-css-vh-vw';
import CustomCard from './components/customCard';
import Gallary from './components/gallary';
import { BlurView } from '@react-native-community/blur';

const LandingPage = () => {

    const backgroundImageRef = createRef();
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Discover');
    const [cardArray, setCardArray] = useState([
        {
            image: require('../assets/images/img1.png'),
            text: 'The Image',
        },
        {
            image: require('../assets/images/img1.png'),
            text: 'The Image',
        },
        {
            image: require('../assets/images/img1.png'),
            text: 'The Image',
        }
    ]);
    const [gallaryArray, setGallaryArray] = useState([
        {
            image: require('../assets/images/img1.png'),
            time: '5h : 25min',
            title: 'Creative Watercolor Sketching for Beginners',
            subTitle: 'Laura McKendry',
            follower: '83.7K',
            rate: '100%',
            rateNumber: 2105,
            cheapPrice: '7.99 $',
            price: '24.99 $'
        },
        {
            image: require('../assets/images/img1.png'),
            time: '5h : 25min',
            title: 'Creative Watercolor Sketching for Beginners',
            subTitle: 'Laura McKendry',
            follower: '83.7K',
            rate: '100%',
            rateNumber: 2105,
            cheapPrice: '7.99 $',
            price: '24.99 $'
        },
        {
            image: require('../assets/images/img1.png'),
            time: '5h : 25min',
            title: 'Creative Watercolor Sketching for Beginners',
            subTitle: 'Laura McKendry',
            follower: '83.7K',
            rate: '100%',
            rateNumber: 2105,
            cheapPrice: '7.99 $',
            price: '24.99 $'
        }
    ]);
    const renderBlurView = () => {
        // console.log(viewRef);
        return (
            // <View style = {{width: vw(92.2), position: 'absolute', right: 0, bottom: 0}}>
                
                <BlurView
                    viewRef={viewRef}
                    style={styles.blurViewStyle}
                    blurAmount={9}
                    blurType={blurType}
                    // blurRadius={10}
                    downsampleFactor={10}
                    overlayColor={'rgba(50, 50, 50, .2'}
                />
            // </View>
        );
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                style={{position: 'relative'}}>
                <ImageBackground source={require('../assets/images/image3.png')} style={styles.landingImage}>
                    <Text style={styles.subtitle}>Valentina Teinitzer</Text>
                    <Text style={styles.maintitle}>Floral Design and Botanical Set Design</Text>
                </ImageBackground>
                <View style={styles.card}>
                    <View style={{flexDirection: 'column', justifyContent: 'left'}}>
                        <Image source={require('../assets/images/1.png')} />
                        <Text style={{fontSize: vw(2), paddingTop: 10}}>Start your journey to creative growth.</Text>
                    </View>
                    <Image source={require('../assets/images/2.png')} />
                </View>
                <View style = {styles.recommended}>  
                    <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(4.44), paddingRight: vw(5)}}>
                        <Text style = {styles.title}>
                            New Plus courses
                        </Text>
                        <Text style = {styles.viewAll}>
                            SHOW MORE
                        </Text>
                    </View>                  
                    <FlatList
                        data={cardArray}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }:any) =>
                            <CustomCard
                                image = {item.image}
                                text = {item.text}
                            />
                        }
                    />
                </View>
                <View style = {styles.recommended}>  
                    <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(4.44), paddingRight: vw(5)}}>
                        <Text style = {styles.title}>
                            Others are watching
                        </Text>
                        <Text style = {styles.viewAll}>
                            SHOW MORE
                        </Text>
                    </View>                  
                    <FlatList
                        data={gallaryArray}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }:any) =>
                            <Gallary
                                image = {item.image}
                                time = {item.time}
                                title = {item.title}
                                subTitle = {item.subTitle}
                                follower = {item.follower}
                                rate = {item.rate}
                                rateNumber = {item.rateNumber}
                                cheapPrice = {item.cheapPrice}
                                price = {item.price}
                            />
                        }
                    />
                </View>
                <View style = {styles.recommended}>  
                    <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(4.44), paddingRight: vw(5)}}>
                        <Text style = {styles.title}>
                            Recommended
                        </Text>
                        <Text style = {styles.viewAll}>
                            SHOW MORE
                        </Text>
                    </View>                  
                    <FlatList
                        data={gallaryArray}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }:any) =>
                            <Gallary
                                image = {item.image}
                                time = {item.time}
                                title = {item.title}
                                subTitle = {item.subTitle}
                                follower = {item.follower}
                                rate = {item.rate}
                                rateNumber = {item.rateNumber}
                                cheapPrice = {item.cheapPrice}
                                price = {item.price}
                            />
                        }
                    />
                </View>
            </ScrollView>
                <View style = {{
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: vw(101),
                aspectRatio: 332/73,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: '#EEEEEE95'}}
            >
                {/* <View style = {{ position: 'relative', bottom: 0, left: 0,width: vw(92.2), height: vw(30), flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', overflow: 'hidden'}}> */}
                    <Image source = {require('../assets/images/blur.png')}
                        style={styles.imageStyle}
                        ref={backgroundImageRef}
                        // blurRadius = {20}
                    />
                    {renderBlurView()}
                    {/* {renderBlurView()} */}
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => 
                            setSelected('Discover')
                        }
                    >
                        
                        <Image source={selected == 'Discover'?require('../assets/images/ico1_2.png') : require('../assets/images/ico2.png')} style={{width: vw(5), height: vw(5)}}/>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Discover' ? '#fc3030' : "#9D9D9D"}]}>
                            Discover
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => {
                            setSelected('Search');
                        }}
                    >
                        <Image source={selected == 'Search'? require('../assets/images/ico2_2.png') : require('../assets/images/ico2.png')} style={{width: vw(5), height: vw(5)}}/>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Search' ? '#fc3030' : "#4f4d4d"}]}>
                            Search
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => {
                            setSelected('My Courses')
                        }}
                    >
                        <Image source={selected === 'My Courses' ? require('../assets/images/ico3_2.png'): require('../assets/images/ico3.png')} style={{width: vw(5), height: vw(5)}}/>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'My Courses' ? '#fc3030' : "#4f4d4d"}]}>
                            My Courses
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => {
                            setSelected('Lists')
                        }}
                    >
                        <Image source={selected === 'Lists' ? require('../assets/images/ico4_2.png'):require('../assets/images/ico4.png')} style={{width: vw(5), height: vw(5)}}/>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Lists' ? '#fc3030' : "#4f4d4d"}]}>
                            Lists
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => {
                            setSelected('Profile')
                        }}
                    >
                        <Image source={selected === 'Profile' ? require('../assets/images/ico5_2.png') : require('../assets/images/ico5.png')} style={{width: vw(5), height: vw(5)}}/>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Profile' ? '#fc3030' : "#4f4d4d"}]}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                {/* </View> */}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: vh(100),
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        marginLeft: vw(5),
        marginBottom: vw(10)
    },
    title: {
        fontSize: vw(6),
        color: 'black',
        fontWeight: '600'
    },
    viewAll: {
        fontSize: vw(3),
        color: 'black'
    },
    card: {
        backgroundColor: '#ffffff', 
        flexDirection: 'row', 
        width: vw(85), 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        gap: 20, 
        margin: 30, 
        marginTop: vw(12),
        marginBottom: vw(12),
        height: vh(12),
        border: 1, 
        borderColor: 'black',
        shadowColor: 'grey', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 3, // Shadow radius
        elevation: 3, // Elevation for Android devices
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: vw(101),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#EEEEEE95'
    },
    footerIcon: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vw(12.5)
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(13.5),
        backgroundColor: '#E9E9E921',
        flexDirection: 'row'
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    },
    imageStyle: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      resizeMode: 'cover',
      width: null,
      height: null,
    },
    blurViewStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: vw(100),
        height: vw(20)
    },
})

export default LandingPage;
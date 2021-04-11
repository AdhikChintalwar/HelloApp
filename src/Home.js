//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState, Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, StatusBar, SafeAreaView ,IconButton} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SwitchButton from 'switch-button-react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-ionicons';
//import { IconButton, Colors } from 'react-native-paper';
//import { FlatList } from 'react-native-gesture-handler';
//import { Header } from 'react-native/Libraries/NewAppScreen';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import myRides from './myRides';
// const Drawer = createDrawerNavigator();


function Home(props) {
    ShowCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        //Alert.alert(date + '-' + month + '-' + year);

    }
    // const [val, setVal] = useState('');
    // this.state = {
    //     activeSwitch: 1
    //   };
    // constructor(props){
    //     super(props)
    //     this.state = {date:"2016-05-15"}
    //   }
    return (


        <View style={{ flex: 1, alignItems: "stretch", justifyContent: 'flex-end', borderStyle: 'solid', borderWidth: 1 }}>
            <View style={styles.container}>
                {/* <Header>

            <Button title='##' style={styles.onMapButton}  onPress={()=>props.navigation.toggleDrawer()}></Button>
           </Header> */}



                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}

                >
                </MapView>
            </View>
            <View>


                {/* <ImageBackground source={require('./assets/carpoolImg.png')}></ImageBackground> */}
                <View style={styles.mainContainer}>
                    {/* <SafeAreaView style={{alignContent:'center',justifyContent:'auto',alignSelf:'center',}}> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', alignContent: 'center' }}>
                        <View >
                           <Icon raised  name='menu' style={{fontSize:40,marginLeft:5,paddingLeft:15}} onPress={() => props.navigation.toggleDrawer()}></Icon>
                            
                        </View>
                        <Text style={{ fontSize: 25, borderBottomWidth: 1, borderBottomColor: 'black', width: 350, textAlign:'center',color:'#2e2a26', marginRight:20,fontStyle:'italic',fontWeight:'bold'}}><Icon name="person" color='#4f4942' style={{ fontSize: 25 }} /> {"Hello,User"}</Text>
                        {/* <IconButton icon="camera"></IconButton> */}
                    </View>
                    <View style={styles.both}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                            {/* <Text style={{fontSize:20,marginTop:6}}>Mode of Ride</Text> */}
                            <SwitchButton
                                //  onValueChange={(val) => this.setState({ activeSwitch: val })} 
                                text1='Offer Pool'
                                text2='Find Pool'
                                switchWidth={200}                 // optional: switch width --- default 44
                                switchHeight={45}
                                switchBackgroundColor='#bdb8a2'
                                padding={10}


                            />
                        </View>



                        <View style={styles.textbar}>
                            {/* <Icon name="add" /> */}
                            <Text style={{ alignSelf: 'center', fontSize: 25, marginBottom: 5,color:'#2e2a26' }}><Icon name="search" style={{ fontSize: 25,color:'#2e2a26' }} />Search your Itinerary</Text>
                            <TextInput
                                style={{ height: 50, width: 350, borderBottomWidth: 0.5 }}
                                placeholder="Your location!!!"
                            />

                            <TextInput
                                style={{ height: 50, width: 350, }}
                                placeholder="Your Destination"
                            />

                        </View>
                    </View>
                    {/* <View style={{flexDirection:'column',flex:2}}>
                            <DatePicker
                                style={{ width:'100%',height:70, }}

                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2021-04-01"
                                maxDate="2022-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}

                            />
                            <Text style={{borderLeftWidth:1,borderLeftColor:'red'}}>no.of seats</Text>
                        </View> */}

                    <View  style={styles.button}>
                        <Button color='red' height='20' title="Search Ride"  />
                    </View>
                </View>

            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 530,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mainContainer: {
        alignItems: 'center',
        //justifyContent: 'space-between',
        //flex: 2,
        alignSelf: 'stretch',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#4f4942',
        height: 320,
        width: '100%',
        borderWidth: 3,
        borderColor: '',
        borderColor: '#2e2a26',
        // alignContent:'space-around',
        borderRadius: 25,
        marginLeft: 1
    },
    textbar: {
        backgroundColor: '#827e7d',
        borderRadius: 10,
        marginTop: 4,
        borderLeftWidth: 3,
        borderLeftColor: '#bfb899',
        borderBottomWidth: 2,
        borderBottomColor: '#bfb899',
        borderTopColor: '#bfb899',
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#bfb899',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        // alignContent: 'center',
        //shadowOffset: { width: 10, height: 10, },
        //shadowColor: 'black',
        //shadowOpacity: 1.0,

    },
    onMapButton: {
        // flex:1,
        //backfaceVisibility: 'visible',
        //position: 'absolute',

    },
    button: {
        //flexDirection: 'row', 
        flex:1,
        height: 60, 
        width:380,
        //backgroundColor: 'yellow',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 4,
        // elevation:1,
    }
});
// const styles = StyleSheet.create({
//     mainContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//        // flex: 1,
//        //alignSelf:'center'
//          padding: 30,
//          alignItems:'center',
//          backgroundColor: '#82826c',

//     },
//     textbar: {
//         backgroundColor: '#e5f7a1',
//         borderRadius: 10,
//         marginLeft: 25,

//     }

// })
export default Home;
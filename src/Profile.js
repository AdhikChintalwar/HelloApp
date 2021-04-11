import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity ,FlatList, SafeAreaView} from 'react-native';
import { color } from 'react-native-reanimated';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
//import { Divider } from 'react-native-elements';

//import { Avatar } from "react-native-elements";
const Profile = (props) => {

    return (
        <SafeAreaView style={{height:'100%', width:'100%'}}>
        <View style={{alignItems:'center',justifyContent:'space-between',backgroundColor:'#8c8073',height:'100%', width:'100%'}}>
            
            
            {/* <Avatar
                size="small"
                rounded
                title="MT"
                source={{uri:'https://img.pngio.com/dwayne-johnson-png-transparent-image-dwayne-johnson-png-500_950.png'}}
                //onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            /> */}
            <View>
            <Image 
                source={{uri:'https://img.pngio.com/dwayne-johnson-png-picture-dwayne-johnson-png-1600_1000.png'}}
                backgroundColor="black"
                placeholder="image"
                style={styles.avatar}
            />
            </View>
           {/* <Divider style={{ backgroundColor: 'blue' }}/> */}
            {/* <Text>{"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}</Text> */}
            <View style={styles.profile}>

                <Text style={styles.headers}>Name:</Text>
                <TextInput placeholder="     Name" maxLength={20} style={styles.inputbars} />
                <Text style={styles.headers}>Phone Number:</Text>
                <TextInput placeholder="     Phone Number" keyboardType='number-pad' maxLength={10} style={styles.inputbars} />
                <Text style={styles.headers}>Change Password:</Text>
                <TextInput placeholder="change password" keyboardType='visible-password' maxLength={15} style={styles.inputbars} />
                {/* <Text style={styles.headers}>Password:</Text>
                <TextInput placeholder="     Password" style={styles.inputbars} /> */}
            </View>
            <View>
                <Text>{"\n\n\n\n"}</Text>
            </View>
            <View style={styles.onButton}>

                <Button title="Edit Profile" color="red"  style={styles.toButton}>

                </Button>

            </View>
        
        </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    inputbars: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        borderLeftColor: "grey",
        borderLeftWidth: 1,
        width: 300,
        height: 50,
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        //shadowOffset:''
    },

    headers: {
        fontSize: 23,
        
        alignSelf:'flex-start'
    },

    onButton: {
        elevation: 10,
        //backgroundColor: "grey",
        // borderRadius: 10,
        //paddingVertical: 10,
        width: 300,
        alignSelf: 'center',

        // paddingHorizontal: 12


    },
    avatar:{
        width: 130,
         height: 130,
         borderRadius:57,
         borderWidth:3,
         borderColor:'red',
        // position:'absolute',
         marginTop:60
    }
}

)

export default Profile;
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-ionicons';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './src/Home';
import Profile from './src/Profile';
import Settings from './src/Settings';
import yourRides from './src/yourRides';
import About from './src/About';
import AppMoney from './src/AppMoney';
import Bookings from './src/Bookings';
import Support from './src/Support';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
function App(props) {

  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName={Home}>
        <Drawer.Screen name="Home" component={Home} options={{drawerIcon:({focused})=><Icon name="home" style={{ fontSize: 30 }} />}}  />
        <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon:({focused})=><Icon name="person" style={{ fontSize: 30 }} />}} >
        {/* { props => <Button title="##" onPress={props.navigation.toggleDrawer()}></Button> } */}
        </Drawer.Screen>
        <Drawer.Screen name="Your Rides" component={yourRides} options={{drawerIcon:({focused})=><Icon name="car" style={{ fontSize: 30 }} />}}>
          {/* {props=> <Text>Your Rides</Text> } */}
        </Drawer.Screen>
        <Drawer.Screen name="App Money" component={AppMoney} options={{drawerIcon:({focused})=><Icon name="cash" style={{ fontSize: 30 }} />}}>
          {/* {props=> <Text>app money</Text> } */}
        </Drawer.Screen>
        <Drawer.Screen name="Bookings" component={Bookings} options={{drawerIcon:({focused})=><Icon name="calendar" style={{ fontSize: 30 }} />}}>
          {/* {props=> <Text>bookings</Text> } */}
        </Drawer.Screen>
        <Drawer.Screen name="Support" component={Support} options={{drawerIcon:({focused})=><Icon name="help-buoy" style={{ fontSize: 30 }} />}}>
          {/* {props=> <Text>support</Text> } */}
        </Drawer.Screen>
        <Drawer.Screen name="About" component={About} options={{drawerIcon:({focused})=><Icon name="information-circle" style={{ fontSize: 30 }} />}}>
          {/* {props=> <Text>about</Text> } */}
        </Drawer.Screen>
        <Drawer.Screen name="Logout" options={{drawerIcon:({focused})=><Icon name="log-out" style={{ fontSize: 30 }} />}}>
          {props=> <Text>logout</Text> }
        </Drawer.Screen>
        




      </Drawer.Navigator>
      {/* <Tab.Navigator
        initialRouteName={Home}
        tabBarOptions={{
          //activeTintColor:'red',
          activeBackgroundColor: '#8ed1fc',
          labelStyle: { fontSize: 20, marginBottom: 10, }
        }}>
          
        <Tab.Screen name="Home" component={Slide} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={settings} />
        
      </Tab.Navigator> */}



    </NavigationContainer>

  )

}

// function Slide() {
//   return (
//    <Stack.Navigator>
//      <Stack.Screen name="Profile" component={Profile}/> 
//      <Stack.Screen name="yourRides" component={yourRides}/> 
//      <Stack.Screen name="AppMoney" component={AppMoney}/> 
//      <Stack.Screen name="Bookings" component={Bookings}/> 
//      <Stack.Screen name="Support" component={Support}/> 
//      <Stack.Screen name="About" component={About}/> 
     
//    </Stack.Navigator>
   
//   )

// }


const styles = StyleSheet.create({

      })

export default App;

import React from 'react';
import {Text,View,TextInput, StyleSheet, Button} from 'react-native';
import Input from './src/textInput';
import ModalView from './src/modal';


  function App() {
    return (
      <View>
        <View style={styles.bar}>
          <Text>Hello world</Text>
        </View>
        <View>
          <Input />
        </View>
        <View>
          <ModalView />
        </View>
      </View>
    );
  }

const styles=StyleSheet.create({
 bar:{
    margin:10,
    backgroundColor:'red',
    width:'100%'  ,
    padding: 10,
    marginLeft:0


 }

}
)
export default App;
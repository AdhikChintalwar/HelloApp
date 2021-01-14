import React from 'react';
import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';



const ModalView=()=>{
    const[open,setOpen]= useState(false)
    const openIt=()=>{
         setOpen(!open)
         }
    return(
<View>
    <Modal visible={open} animationType="slide">
        <View>
         <Text>Hello</Text>
         <Button onPress={openIt} title="close modal"/>
         </View>
     </Modal>
    <Button onPress={openIt} title="open modal"/>
</View>
    )
}
export default ModalView;
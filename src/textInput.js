import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard, Button, ScrollView, SafeAreaView } from 'react-native';


const Input = () => {
    const [text, setText] = useState('')
    const [name, addName] = useState([])

    const onChange = (textt) => {

        setText(textt);

    }

    const addnames = () => {
        if (text != '') {
            const newArray = [...name, text]
            addName(newArray)
            setText('')
            setShow(true)
        }


    }
    const [show, setShow] = useState(false)
    return (

        <ScrollView style={{ width: '100%' }}>
            <View>
                <View style={styles.inputs}>
                    <TextInput placeholder="enter some text"
                        value={text}
                        onChangeText={(e) => { onChange(e) }}
                    />

                </View>
                <View><Button title="Add" onPress={addnames} /></View>
                {show ? <View >
                    <Text > {name.map((naam, i) => (

                        < Text style={styles.support} key={i} > {naam}{'\n'}</Text>
                    )
                    )
                    }
                    </Text>


                </View> : null}




            </View >
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    inputs: {
        width: '100%',
        backgroundColor: '#cecece'
    },
    support: {
        width: '100%',
        backgroundColor: 'grey',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 30
    }
})

export default Input;
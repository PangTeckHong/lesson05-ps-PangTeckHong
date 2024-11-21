import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {data} from './Data.js';

const Add = ({navigation}) => {

    const [itemName, setItemName] = useState('');
    const [image, setImage] = useState('');
    const [styleNo, setStyleNo ] = useState('');
    const [brand, setBrand] = useState('Nike');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Shoes Name:</Text>
            <TextInput
                style={styles.input}
                maxLength={45}
                onChangeText={(itemName) => setItemName(itemName)}
            />
            <Text style={styles.label}>Shoes Image Url:</Text>
            <TextInput
                style={styles.input}
                placeholder={'image link'}
                onChangeText={(image) => setImage(image)}
            />
            <Text style={styles.label}>Style code:</Text>
            <TextInput
                style={styles.input}
                placeholder={'style code'}
                onChangeText={(styleNo) => setStyleNo(styleNo)}
            />
            <RNPickerSelect
                onValueChange={(value) => setBrand(value)}
                items={[
                    { label: 'NIKE', value: 'NIKE' },
                    { label: 'ADIDAS', value: 'ADIDAS' },
                    { label: 'NEW BALANCE', value: 'NEW BALANCE' },
                    { label: 'PUMA', value: 'PUMA' },
                ]}
            />

            <Button title="Submit" onPress={()=>{
                let item = {name:itemName, image:image, style:styleNo};
                let indexnum = 1;
                if(brand === "NIKE") {
                    indexnum = 0;
                } else if(brand === "ADIDAS") {
                    indexnum = 1;
                } else if(brand === "NEW BALANCE") {
                    indexnum = 2;
                } else if(brand === "PUMA") {
                    indexnum = 3;
                }
                data[indexnum].data.push(item);
                navigation.navigate("Home")
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
    },
});

export default Add;

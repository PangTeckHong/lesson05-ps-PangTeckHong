import React, { useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {data} from './Data';

const Edit = ({navigation, route}) => {
    const [itemName, setItemName] = useState(route.params.item["name"]);
    const [image, setImage] = useState('');
    const [styleNo, setStyleNo ] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Shoes Name:</Text>
            <TextInput
                value={itemName}
                style={styles.input}
                onChangeText={(itemName) => setItemName(itemName)}
            />

            <Text style={styles.label}>Shoes Image Url:</Text>
            <TextInput
                value={image}
                style={styles.input}
                onChangeText={(image) => setImage(image)}
            />

            <Text style={styles.label}>Style code:</Text>
            <TextInput
                value={styleNo}
                style={styles.input}
                onChangeText={(styleNo) => setStyleNo(styleNo)}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Save"
                            onPress={() => {
                                let indexnum = 1;
                                if(route.params.type === "NIKE") {
                                    indexnum = 0;
                                } else if(route.params.type === "ADIDAS") {
                                    indexnum = 1;
                                } else if(route.params.type === "NEW BALANCE") {
                                    indexnum = 2;
                                } else if(route.params.type === "PUMA") {
                                    indexnum = 3;
                                }

                                data[indexnum].data[route.params.index] = { name: itemName, image:image, style: styleNo };
                                navigation.navigate("Home");
                            }}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete"
                            onPress={()=> {
                                let indexnum = 1;
                                if(route.params.type === "NIKE") {
                                    indexnum = 0;
                                } else if(route.params.type === "ADIDAS") {
                                    indexnum = 1;
                                } else if(route.params.type === "NEW BALANCE") {
                                    indexnum = 2;
                                } else if(route.params.type === "PUMA") {
                                    indexnum = 3;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text:'Yes', onPress:()=>{
                                            data[indexnum].data.splice(route.params.index,1);
                                            navigation.navigate("Home")
                                        }},
                                        {text:'No'}
                                    ])
                            }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor:'#2A2827',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
        color: 'white',
    },
    input: {
        borderWidth: 1,
        marginBottom: 16,
        borderColor:'#545352',
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        margin: 10,
    },
});

export default Edit

import React from "react";
import { StyleSheet, Text, View, SectionList, Button, Image, TouchableOpacity } from 'react-native';
import {Header} from "react-native/Libraries/NewAppScreen";

const data = [
  {
    title: 'NIKE',
    data: [
      {name: 'Air Jordan 4 Retro "Oxidized Green"', image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0604e24-0b81-43f7-9288-73b8274dda45/AIR+JORDAN+4+RETRO.png', style:'FQ8138-103'},
      {name: 'Nike Dunk Low Premium Fleece By You', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c1f86e9a-6d04-4834-a8bd-6dd1b8163b5b/custom-dunk-low-premium.png', style:'HV4423-900'},
      {name: 'Nike Air Force 1 LV8', image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e55ebbb-34b9-484b-9084-cae52294044d/AIR+FORCE+1+LV8+%28GS%29.png', style:'HQ3473-122'}
    ],
  },
  {
    title: 'ADIDAS',
    data: [
      {name: 'Y-3 Centennial Lo', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d62f69d40ec49f3809694c9a17851d1_9366/Y-3_Centennial_Lo_Black_IF7787_01_standard.jpg', style:'IF7787'},
      {name: 'Y-3 Superstar', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fc27b423d52942cfa1d42cf925a3d64f_9366/Y-3_Superstar_Grey_IG3043_01_standard.jpg',style:'IG3043'},
      {name: 'Y-3 Centennial High Shoes', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/727d361b4f5f482892356db0298ba56d_9366/Y-3_Centennial_High_Shoes_Multicolor_IG4082_01_standard.jpg', style:'IG4082'}
    ],
  },
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Image
            source={{uri: `${item.image}`}}
            style={styles.cardImage}  // Adding the image styling here
        />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.styleText}>Style: {item.style}</Text>
        </View>
      </TouchableOpacity>
  );
};

const renderSection = ({ section }) => {
  return (
      <Text style={styles.headerText}>
        {section.title}
      </Text>
  );
};

function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>COLLECTION SHOES</Text>
        <SectionList
            sections={data}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2A2827'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    marginTop: 30,
    margin:10,
    fontSize: 26,
    fontWeight:'bold',
    color: '#E9DCC7',
    textAlign: 'center',
  },
  opacityStyle: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 10,
    borderBottomColor: '#545352',
    alignItems: 'center',
  },
  cardImage: {
    width: '200', // Set the width of the image
    height: '200', // Set the height of the image
    marginLeft: 10,  // Added margin for spacing between the text and image
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'left',
    flex: 1
  },
  styleText: {
    fontSize: 18,
    color: '#A8A8A8',
    margin:10
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#F0E5D4',
    borderBottomWidth: 1,
    borderColor:'gray'
  },
});

export default App;

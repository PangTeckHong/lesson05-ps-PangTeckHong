import React from "react";
import { StyleSheet, Text, View, SectionList, Button, Image, TouchableOpacity } from 'react-native';
import {Header} from "react-native/Libraries/NewAppScreen";
import {data} from "./Data.js";

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

function Home({navigation}) {
  const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Edit",{index:index, item:{name: item.name}, type:section.title, key:item.style})}>
          <Image
              source={{uri: `${item.image}`}}
              style={styles.cardImage}  // Adding the image styling here
          />
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.styleText}>Style: {item.style}</Text>
          </View>
        </TouchableOpacity>
    )
  }
  return (
      <View style={styles.container}>
        <Text style={styles.header}>COLLECTION SHOES</Text>
        <SectionList
            sections={data}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
        />
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => {navigation.navigate("Add")}}>Add Shoes</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#F5BC60',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
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

export default Home;

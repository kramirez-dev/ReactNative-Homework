import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView
  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsChicken from './detailsChicken'
import DetailsPizza from './detailsChicken'
import DetailsThai from './detailsChicken'
import DetailsBurger from './detailsBurger'
  
const Stack = createStackNavigator();

function HomeScreen ( { navigation }  ) {
        return(
          <ScrollView>
          <ImageBackground source={require('../../../../food.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.view}>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetailsChicken')}
                >
                    <Text>Chicken</Text>
                <Image source={require('../../../../chicken.jpg')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetailsPizza')}
                >
                    <Text>Pizza</Text>
                <Image source={require('../../../../pizza.jpg')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetailsThai')}
                >
                    <Text>Thai</Text>
                <Image source={require('../../../../thai.jpg')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetailsBurger')}
                >
                    <Text>Burger</Text>
                <Image source={require('../../../../burger.jpg')} style={styles.image}/>
                </TouchableOpacity>
          </View>
          </ImageBackground>
      </ScrollView>
   )
}

export default HomeScreen

const styles = StyleSheet.create({
    button: {
      textAlign: "left",
      backgroundColor: '#ffffff',
      padding: 10,
      marginTop: 20
    },
    view: {
      flex: 1,
       alignItems: 'center'
    },
    image: {
      width: 350,
      height: 120
    }
  })


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function DetailsPizza() {
    return (
        <View style={styles.view}>
        <Image source={require('../../../../pizza.jpg')} style={styles.image}></Image>
      <Text style={styles.text}>It's a savory dish of Italian origin, consisting of a usually round, 
      flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other 
      ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally 
      in a wood-fired oven. A small pizza is sometimes called a pizzetta.</Text>
        <View style={styles.price}>
        <Text style={styles.text1}>Price:</Text>
        <Text style={styles.text2}>$50.00</Text>
        </View>
        <Button title="order"></Button>
    </View>
      );
  }

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff0d4'
    },
    text: {
      fontSize: 16
    },
    text1: {
      fontSize: 16,
      textAlign: 'center'
    },
    text2: {
      fontSize: 18,
      textAlign: 'center'
    },
    image: {
      width: '90%', 
      height: '45%',
      marginBottom: 20,
      borderRadius: 10,
      marginTop: 20,
    },
    price: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 25,
      marginTop: 15,
      marginBottom: 15
    }
  })

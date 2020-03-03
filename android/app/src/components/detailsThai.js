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

export default function DetailsThai() {
    return (
        <View style={styles.view}>
        <Image source={require('../../../../thai.jpg')} style={styles.image}></Image>
      <Text style={styles.text}>Thai food as demonstrating "intricacy; attention to detail; texture; 
      color; taste; and the use of ingredients with medicinal benefits, as well as good flavor", as well as 
      care being given to the food's appearance, smell and context. Australian chef David Thompson, 
      an expert on Thai food, observes that unlike many other cuisines. </Text>
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

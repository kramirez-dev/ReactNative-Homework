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
import HomeScreen from './android/app/src/components/home';
import DetailsChicken from './android/app/src/components/detailsChicken';
import DetailsPizza from './android/app/src/components/detailsPizza';
import DetailsThai from './android/app/src/components/detailsThai';
import DetailsBurger from './android/app/src/components/detailsBurger';


function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40, marginLeft: 10 }}
      source={require('./arrow1.png')}
    />
  );
}

function LogoTitle2() {
  return (
    <Image
      style={{ width: 40, height: 40, marginRight: 10 }}
      source={require('./cart1.png')}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home"
        component={HomeScreen}
        options={{
          headerLeft: props => <LogoTitle {...props} />,
          headerRight: props => <LogoTitle2 {...props} />,
          headerTitle: '365 Restaurant',
          headerStyle: {
            backgroundColor: '#f10000',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen 
        name="DetailsChicken" 
        component={DetailsChicken} 
       options={{
          headerRight: props => <LogoTitle2 {...props} />,
          headerTitle: 'Chicken Details',
          headerStyle: {
            backgroundColor: '#f10000',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      <Stack.Screen name="DetailsPizza" component={DetailsPizza} 
       options={{
        headerRight: props => <LogoTitle2 {...props} />,
        headerTitle: 'Pizza Details',
        headerStyle: {
          backgroundColor: '#f10000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
      <Stack.Screen name="DetailsThai" component={DetailsThai} 
       options={{
        headerRight: props => <LogoTitle2 {...props} />,
        headerTitle: 'Thai Details',
        headerStyle: {
          backgroundColor: '#f10000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
      <Stack.Screen name="DetailsBurger" component={DetailsBurger} 
       options={{
        headerRight: props => <LogoTitle2 {...props} />,
        headerTitle: 'Burger Details',
        headerStyle: {
          backgroundColor: '#f10000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;

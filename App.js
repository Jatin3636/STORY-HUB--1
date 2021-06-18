import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';

import readStory from './screens/readStory';
import writeStory from './screens/writeStory';

export default class App extends Component {
  render() {
    return (<View style={{flex:1 ,borderWidth:5}}>
      <Header
          backgroundColor={'lightblue'}
          centerComponent={{
            text: 'STORY HUB',
            style: { color: 'black', fontSize: 20,fontWeight:'bold' },
          }}
        />
      <Appcontainer />
      </View>
      )
  }
}

const tabNavigator = createBottomTabNavigator(
  {
    writeStory: { screen: writeStory },
    reedStory: { screen: readStory },
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'reedStory') {
          return (
            <Image
              source= {require("./assets/read.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'writeStory') {
          return (
            <Image
              source= {require("./assets/write.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const Appcontainer = createAppContainer(tabNavigator);

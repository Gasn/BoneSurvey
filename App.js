import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import FontAwesome from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
import { Font } from 'expo';
import {View} from 'react-native';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
});

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fontLoaded : false
    }
  }
  async componentWillMount() {
    try {
      await Font.loadAsync({
        FontAwesome,
        MaterialIcons
      });

      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.fontLoaded ? <RootStack/> : null}
      </View>
    )
  }
}
import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "./components/Home";

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
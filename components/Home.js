import React,{Component} from 'react'
import {Text} from 'react-native'

class Home extends Component {
    static navigationOptions = {
      title: 'Fracture Risk Calculator',
    }; 
    render() {
      return (
        <Text>Fill out the following to estimate your fracture risk</Text>
      );
    }
  }

  export default Home;
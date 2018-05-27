import React,{Component} from 'react'
import {ScrollView, Text} from 'react-native'
import Form from './Form'

class Home extends Component {
    static navigationOptions = {
      title: 'Fracture Risk Calculator',
    }; 
    render() {
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Fill out the following to estimate your fracture risk</Text>
          <Form/>
        </ScrollView>
      );
    }
  }

  const styles = {
    container: {
      flex: 1,
      padding: 20
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 20,
      fontSize: 17
    }
  }

  export default Home;
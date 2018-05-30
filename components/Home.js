import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import Form from "./Form";

class Home extends Component {
  static navigationOptions = {
    title: "Fracture Risk Calculator"
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={65}
      >
        <Text style={styles.title}>
          Fill out the following to estimate your fracture risk
        </Text>
        <ScrollView
          style={styles.scroll}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: false });
          }}
        >
          <Form />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 17,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  scroll: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexGrow: 1
  }
};

export default Home;

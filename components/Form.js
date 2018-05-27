import React from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { CheckBox } from "react-native-elements";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sex: ""
    };
  }
  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Full Name (optional)</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="words"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Text style={styles.label}>Sex</Text>
        <View style={styles.flexrow}>          
          <CheckBox
            left
            containerStyle={styles.checkbox}
            title="Male"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => this.setState({ sex: "male" })}
            checked={this.state.sex === "male"}
          />
          <CheckBox
            left
            containerStyle={styles.checkbox}
            title="Female"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => this.setState({ sex: "female" })}
            checked={this.state.sex === "female"}
          />
        </View>
        <Text style={styles.label}>Age</Text>
      </View>
    );
  }
}

const styles = {
  form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  label: {
    marginBottom: 3,
    textAlign: "left",
    fontWeight: "bold"
  },
  input: {
    alignSelf: "stretch",
    height: 30,
    borderColor: "#D0D0D0",
    borderBottomWidth: 1,
    marginBottom: 30
  },
  flexrow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 25
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 0,
    width: 100,
    padding: 0,
    marginTop: 10
  }
};

export default Form;

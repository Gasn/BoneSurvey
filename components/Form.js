import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { CheckBox } from "react-native-elements";
import { ageOptions } from "./Shared/AgeOptions";
import { fractureOptions } from "./Shared/FractureOptions";
import SelectInput from "react-native-select-input-ios";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sex: "",
      age: 0,
      fractures: 0,
      falls: 0,
      bmd: false,
      tscore: "",
      densitometer: "lunar",
      bmdMeasure: ""
    };
  }
  calculate() {}
  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Full Name (optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="words"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Text style={styles.label}>Sex</Text>
        <View style={styles.flexRow}>
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
        <SelectInput
          style={styles.select}
          options={ageOptions}
          value={this.state.age}
          onSubmitEditing={age => this.setState({ age })}
        />
        <Text style={styles.label}>Fractures since the age of 50</Text>
        <SelectInput
          style={styles.select}
          options={fractureOptions}
          value={this.state.fractures}
          onSubmitEditing={fractures => this.setState({ fractures })}
        />
        <Text style={styles.label}>Falls over last 12 months</Text>
        <SelectInput
          style={styles.select}
          options={fractureOptions}
          value={this.state.falls}
          onSubmitEditing={falls => this.setState({ falls })}
        />
        <Text style={styles.label}>
          Do you have a Bone Mineral Density (BMD) measurement?
        </Text>
        <View style={styles.flexRow}>
          <CheckBox
            left
            containerStyle={styles.checkbox}
            title="Yes"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => this.setState({ bmd: true })}
            checked={this.state.bmd}
          />
          <CheckBox
            left
            containerStyle={styles.checkbox}
            title="No"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => this.setState({ bmd: false })}
            checked={!this.state.bmd}
          />
        </View>
        <Text style={styles.label}>T-scores</Text>
        <TextInput
          style={styles.input}
          placeholder="T-scores"
          autoCapitalize="none"
          onChangeText={tscore => this.setState({ tscore })}
          value={this.state.tscore}
        />
        <Text style={styles.label}>Densitometer</Text>
        <View style={styles.flexRow}>
          <CheckBox
            left
            containerStyle={styles.checkbox}
            title="by DXA GE Lunar"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => this.setState({ densitometer: "lunar" })}
            checked={this.state.densitometer === "lunar"}
          />
          <CheckBox
            left
            containerStyle={styles.checkbox}
            title="by DXA Hologic"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => this.setState({ densitometer: "hologic" })}
            checked={this.state.densitometer === "hologic"}
          />
        </View>
        <Text style={styles.label}>Actual BMD</Text>
        <TextInput
          style={styles.input}
          placeholder="g/cm²"
          autoCapitalize="none"
          onChangeText={bmdMeasure => this.setState({ bmdMeasure })}
          value={this.state.bmdMeasure}
        />
        <Text style={styles.label}>Disclaimer</Text>
        <Text style={styles.disclaimer}>
          The results produced by our calculator should serve as a guide only.
          If concerned about your fracture risk, it is also important to consult
          your doctor or a bone specialist.
        </Text>
        <Button
          style={styles.button}
          title="Calculate Risk Factor"
          onPress={() => this.calculate}
        />
      </View>
    );
  }
}

const styles = {
  form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    marginBottom: 50
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
  flexRow: {
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
  },
  select: {
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    paddingTop: 8,
    marginBottom: 25,
    paddingBottom: 8
  },
  disclaimer: {
    marginBottom: 20
  }
};

export default Form;

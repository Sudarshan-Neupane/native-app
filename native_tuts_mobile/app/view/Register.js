import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from "react-native";

export class Register extends Component {
  static navigationOptis = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirm: ""
    };
  }

  cancelRegistr = () => {
    Alert.alert("Registration Cancelled ");
    this.props.navigation.navigate("HomeRT");
  };

  registerAccount = () => {
    if (!this.state.username) {
      Alert.alert("Please enter a username");
    } else if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Password do not match");
    } else {
      AsyncStorage.getItem(this.state.username, (error, result) => {
        if (result !== null) {
          Alert.alert(`${this.state.username} alerady exists`);
        } else {
          AsyncStorage.setItem(
            this.state.username,
            this.state.password,
            (err, result) => {
              Alert.alert(`${this.state.username} Account created`);
              this.props.navigation.navigate("HomeRT");
            }
          );
        }
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register Account</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />

        <Text style={styles.label}>Enter UserName</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />

        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ passwordConfirm: text })}
          value={this.state.passwordConfirm}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Enter Confirm Password</Text>

        <TouchableHighlight
          onPress={this.registerAccount}
          underlayColor="#31e981"
        >
          <Text style={styles.buttons}> Register </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.cancelRegistr}
          underlayColor="#31e981"
        >
          <Text style={styles.buttons}> Cancel </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%"
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "green"
  },
  label: {
    paddingBottom: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Button,
  AsyncStorage
} from "react-native";
export class Login extends Component {
  static navigationOption = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  cancelLogin = () => {
    Alert.alert("Login Cancelled");
    this.props.navigation.navigate("HomeRT");
  };
  loginUser = () => {
    if (!this.state.username || !this.state.password) {
      Alert.alert(" Username and Password Required !!!");
    } else {
      AsyncStorage.getItem("userLoggedIn", (err, result) => {
        if (result !== "none") {
          Alert.alert("Someone already logged on");
          this.props.navigation.navigate("HomeRT");
        } else {
          AsyncStorage.getItem(this.state.username, (err, result) => {
            if (result != null) {
              if (result !== this.state.password) {
                Alert.alert("Password Incorrect");
              } else {
                AsyncStorage.setItem(
                  "userLoggedIn",
                  this.state.username,
                  (err, result) => {
                    Alert.alert(`${this.state.username} Logged In`);
                    this.props.navigation.navigate("HomeRT");
                  }
                );
              }
            } else {
              Alert.alert(`No account found for ${this.state.username}`);
            }
          });
        }
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Login </Text>

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

        <TouchableHighlight onPress={this.loginUser} underlayColor="#31e981">
          <Text style={styles.buttons}> Login </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelLogin} underlayColor="#31e981">
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

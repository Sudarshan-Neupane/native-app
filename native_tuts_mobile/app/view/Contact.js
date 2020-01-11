import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";

import { SrackNavigator } from "react-navigation";

import { Header } from "../sections/Header";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Enter Message",
      name: " Enter Name",
      email: " Enter your Email"
    };
  }

  clearFields = () =>
    this.setState({
      name: "",
      msg: "",
      email: ""
    });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigate={navigate} message="Press to Login" />
        <Text style={styles.heading}> Contact Us </Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <TextInput
          style={styles.multiInput}
          onChangeText={text => this.setState({ msg: text })}
          value={this.state.msg}
          multiline={true}
          numberOfLines={4}
        />
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
          <Text style={styles.buttons}> Send Message </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
          <Text style={styles.buttons}> Reset Form </Text>
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
  multiInput: {
    flex: 2,
    width: "80%",
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "green"
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});

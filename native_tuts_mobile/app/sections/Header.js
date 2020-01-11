import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  AsyncStorage,
  Alert
} from "react-native";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, loggedUser: false };
  }
  toggleUser = () => {
    if (this.state.isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
        this.setState({
          isLoggedIn: false,
          loggedUser: false
        });
        Alert.alert("User Logged Out");
      });
    } else {
      this.props.navigate("LoginRT");
    }
  };
  componentDidMount() {
    AsyncStorage.getItem("userLoggedIn", (err, result) => {
      if (result === "none") {
        console.log("NONE");
      } else if (result === null) {
        AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
          console.log("Set user to None");
        });
      } else {
        this.setState({
          isLoggedIn: true,
          loggedUser: result
        });
      }
    });
  }
  render() {
    let display = this.state.isLoggedIn
      ? this.state.loggedUser
      : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image style={styles.logoStyle} source={require("./img/sn_logo.png")} />
        <Text onPress={this.toggleUser} style={styles.headText}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    flex: 2
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: Platform.OS === "ios" ? "#296d98" : "#07da63",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000"
  },
  logoStyle: {
    flex: 1,
    width: 100,
    height: undefined
  }
});

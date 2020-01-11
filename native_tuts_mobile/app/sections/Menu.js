import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  TouchableOpacity
} from "react-native";

export class Menu extends Component {
  onPress = () => {
    Alert.alert("Please release the tapped button");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate("LessonsRT")}
          >
            <Text style={styles.buttonText}> LESSONS </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate("RegisterRT")}
          >
            <Text style={styles.buttonText}> REGISTER </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> BLOG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate("ContactRT")}
          >
            <Text style={styles.buttonText}> CONTACT </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> QUIZ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> ABOUT </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#35065a"
  },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderBottomWidth: 1
  },
  buttonStyles: {
    backgroundColor: "#35065a",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});

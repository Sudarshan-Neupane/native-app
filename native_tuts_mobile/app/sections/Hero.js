import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";

export class Hero extends Component {
  render() {
    return (
      <Image style={StyleSheet.heroImage} source={require("./img/hero.jpg")} />
    );
  }
}

const styles = StyleSheet.create({
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 1
  }
});

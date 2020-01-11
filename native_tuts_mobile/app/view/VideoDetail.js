import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-yt-player";

export class VideoDetail extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let tubeId = this.props.navigation.getParam("youtubeId", "NO VIDEO");
    let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
    return (
      <YoutubePlayer
        loop
        topBar={TopBar}
        videoId="Z1LmpiIGYNs"
        autoPlay
        onFullScreen={this.onFullScreen}
        onStart={() => console.log("onStart")}
        onEnd={() => alert("on End")}
      />
    );
  }
}
const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: "center",
      position: "absolute",
      top: 0
    }}
  >
    <Text style={{ color: "#FFF" }}> Custom Top bar</Text>
  </View>
);

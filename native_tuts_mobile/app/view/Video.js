import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  TouchableWithoutFeedback,
  FlatList,
  Image
} from "react-native";
import { Header } from "../sections/Header";

export class Video extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { listLoaded: false };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=taylorswift&type=video&key=AIzaSyDa-5c6AaWJ0qoVGYiNvar3WZrDTWJ6GSE"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          listLoaded: true,
          videoList: Array.from(responseJson.items)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text onPress={this.goBack}> Go Back </Text>
            <FlatList
              data={this.state.videoList}
              renderItem={({ item }) => (
                <>
                  <TubeItem
                    navigate={navigate}
                    id={item.id.videoId}
                    title={item.snippet.title}
                    imageSrc={item.snippet.thumbnails.high.url}
                  />
                </>
              )}
            />
          </View>
        )}
        {!this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> LOADING </Text>
          </View>
        )}
      </View>
    );
  }
}

export class TubeItem extends Component {
  onPress = () => {
    this.props.navigate("VideoDetailRT", { youtubeId: this.props.id });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

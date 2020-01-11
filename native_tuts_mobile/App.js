import React from "react";
import { StackNavigator } from "react-navigation";
import { Home } from "./app/view/home";
import { Contact } from "./app/view/Contact";
import { Video } from "./app/view/Video";
import { VideoDetail } from "./app/view/VideoDetail";
import { Register } from "./app/view/Register";
import { Login } from "./app/view/login";

const MyRoutes = StackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    },
    LessonsRT: {
      screen: Video
    },
    VideoDetailRT: {
      screen: VideoDetail
    },
    RegisterRT: {
      screen: Register
    },
    LoginRT: {
      screen: Login
    }
  },
  {
    initialRouteName: "HomeRT"
  }
);

export default function App() {
  return <MyRoutes />;
}

// @flow
import React, {Component} from "react";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Login from "./components/Login";
import Transactions from "./components/Transactions";
import {Navigator} from "react-native";
import {AsyncStorage} from 'react-native';
import * as firebase from 'firebase';
import {Container, Header, Text} from "native-base";

const store = configureStore();

const firebaseConfig = {
  apiKey: "AIzaSyBd43g5le4di_vnvArs3GbJWjTDbFwS3FE",
  authDomain: "budget-android-7155d.firebaseapp.com",
  databaseURL: "https://budget-android-7155d.firebaseio.com",
  storageBucket: "budget-android-7155d.appspot.com",
  messagingSenderId: "227602636091"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);

    this.state = {
      component: null
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('user_data').then((user_data_json) => {
      console.log('async user');
      let user_data = JSON.parse(user_data_json);
      if (user_data != null) {
        firebaseApp.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log('logged');
            this.setState({
              component: Transactions
            });
          } else {
            console.log('not logged');
            this.setState({
              component: Login
            });
          }
        });
      }
      else {
        this.setState({
          component: Login
        });
      }
    });
  }

  navigatorRenderScene(route, navigator) {
    if (route.component) {
      return React.createElement(route.component, {
        ...this.props, ...route.passProps,
        navigator,
        route
      });
    }
  }

  render() {
    console.log("start");
    if (this.state.component == null) {
      return (
        <Container>
          <Header>
            <Text>
              Loading...
            </Text>
          </Header>
        </Container>
      );
    }
    return (
      <Provider store={store}>
        <Navigator
          ref={(nav) => {navigator = nav}}
          initialRoute={{component: this.state.component}}
          renderScene={this.navigatorRenderScene}/>
      </Provider>
    )
  }
}

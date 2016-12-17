// @flow
import React, {Component} from "react";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Login from "./components/Login";
import Transactions from "./components/Transactions";
import TransactionForm from "./components/TransactionForm";
import {Navigator} from "react-native";

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} {...route.passProps}/>);
      case 'transactions':
        return (<Transactions navigator={navigator} {...route.passProps}/>);
      case 'transaction-form':
        return (<TransactionForm navigator={navigator} {...route.passProps}/>);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          ref={(nav) => {navigator = nav}}
          initialRoute={{id: 'transactions'}}
          renderScene={this.navigatorRenderScene}/>
      </Provider>
    )
  }
}

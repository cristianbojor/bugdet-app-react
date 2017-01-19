import React, {Component, PropTypes} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import Form from "./Form";
import {bindActionCreators} from "redux";
import {login} from "../../actions/loginActions";
import Transactions from "../Transactions";
import {AsyncStorage} from "react-native";

class Login extends Component {

  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick(auth) {
    login(auth).then(user_data => {
      console.log('logged inuser data', user_data);
      if (user_data) {
        AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigator.push({
          component: Transactions,
          passProps: {
            connected: true
          }
        });
      }
    });

  }

  render() {
    console.log('login');

    return (
      <Form onSubmit={this.onLoginClick}/>
    );
  }
}

Login.propTypes = {
  navigator: PropTypes.object.isRequired
};


function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      login
    }, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

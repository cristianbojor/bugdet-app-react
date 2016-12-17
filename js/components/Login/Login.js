import React, {Component, PropTypes} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import Form from "./Form";
import {bindActionCreators} from "redux";
import {login} from "../../actions/loginActions";

class Login extends Component {

  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick({email, password}) {
    // return new Promise(() => {
    //   if (!['criss@mail.com'].includes(email) || password !== "password") {
    //     throw new SubmissionError({_error: 'Invalid credentials!'})
    //   } else {
    // }
    // })

    this.props.navigator.push({
      id: 'transactions'
    })
  }

  render() {
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

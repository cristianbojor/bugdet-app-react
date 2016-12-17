import React, {Component} from "react";
import {StyleSheet, Text, Navigator, TextInput, TouchableHighlight, Button, View, AsyncStorage} from "react-native";
import styles from "../../styles/styles";
import TextField from "../common/TextField";
import {Field, reduxForm} from "redux-form";

const validate = values => {
  const errors = {};
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.password) {
  //   errors.password = 'Required'
  // }

  return errors
};


const Form = ({handleSubmit, submitting, error}) => (
  <View style={styles.container}>
    <View style={styles.welcome}>

      <Field name="email" component={TextField}/>
      <Field name="password" component={TextField}/>
      <Button onPress={handleSubmit} title="Login" color="#841584"/>
      <Text>{error}</Text>
    </View>
  </View>
);

Form.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'loginForm',
  validate,
  destroyOnUnmount: false,
})(Form);

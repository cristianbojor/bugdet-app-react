import React, {Component} from "react";
import TextField from "../common/TextField";
import DatePicker from "../common/DatePicker";
import {Container, Content, List, ListItem, Text, Picker, Button} from "native-base";
import {Field, reduxForm} from "redux-form";

const Item = Picker.Item;

const renderCategories = (categories) => {
  return categories.map(c => <Item key={c} label={c} value={c}/>)
};

const Form = ({handleSubmit, submitting, error, categories}) => (
  <Container>
    <Content>
      <List>
        <ListItem>
          <Field name="category" component={(input) =>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={input.value}
              onValueChange={input.onChange}>
              {renderCategories(categories)}
            </Picker>
          }/>
        </ListItem>

        <ListItem>
          <Field name="details" label="Details" component={TextField}/>
        </ListItem>

        <ListItem>
          <Field name="date" component={DatePicker}/>
        </ListItem>
      </List>
      <Button style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} onPress={handleSubmit} title="Login"
              color="#841584">Login</Button>
      <Text>{error}</Text>
    </Content>
  </Container>
);

Form.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'transactionForm',
  destroyOnUnmount: false,
})(Form);

import React, {Component} from "react";
import TextField from "../common/TextField";
import DatePicker from "../common/DatePicker";
import {Container, Content, List, ListItem, Text, Picker, Button} from "native-base";
import {Field, reduxForm} from "redux-form";

const Item = Picker.Item;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentWillMount() {
    debugger;
    this.props.initialize(this.props.initialValues);
  }

  renderCategories() {
    return this.props.categories.map(c => <Item key={c} label={c} value={c}/>)
  };

  render() {
    const {handleSubmit, submitting, error, categories} = this.props;
    return (
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
                  {this.renderCategories(categories)}
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
                  color="#841584">Save</Button>
          <Text>{error}</Text>
        </Content>
      </Container>
    )
  }
}

Form.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'transactionForm',
  destroyOnUnmount: false,
})(Form);

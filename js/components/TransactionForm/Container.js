import React, {Component, PropTypes} from "react";
import {Alert,BackAndroid} from "react-native";
import {connect} from "react-redux";
import Form from "./Form";
import {bindActionCreators} from "redux";
import {saveTransaction} from "../../actions/transactionActions";

class Container extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', function() {
      this.props.navigator.pop();
      return true;
    }.bind(this));
  }

  onSubmit(data) {
    console.log('saved', data);

    saveTransaction(data);
    this.props.navigator.pop();
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}
            categories={this.props.categories}
            initialValues={this.props.transaction}
      />
    );
  }
}

Container.propTypes = {
  navigator: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)

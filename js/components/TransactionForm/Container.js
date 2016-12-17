import React, {Component, PropTypes} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import Form from "./Form";
import {bindActionCreators} from "redux";
import {login} from "../../actions/loginActions";

class Container extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    debugger;
  }

  render() {
    debugger;
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
  debugger;
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      login
    }, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)

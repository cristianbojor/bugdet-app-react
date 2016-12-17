/**
 * Created by fbojor on 01.12.2016.
 */
import React, {Component, PropTypes} from "react";
import {Text} from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon} from "native-base";
import {connect} from "react-redux";
import List from "./List/List";

class TransactionsContainer extends Component {
  static get defaultProps() {
    return {
      title: 'Container'
    };
  }

  constructor(context) {
    super(context);

    this.onTransactionClick = this.onTransactionClick.bind(this);
  }

  onTransactionClick(event, transactionId) {
    event.preventDefault();
    const transaction = this.props.transactions.find(t=>t.id === transactionId);

    if (transaction) {
      this.props.navigator.push({
        id: 'transaction-form',
        passProps: {
          transaction
        }
      })
    }

  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Transactions</Title>
        </Header>

        <Content>
          {this.props.transactions &&
          <List transactions={this.props.transactions} onItemClick={this.onTransactionClick}/>}
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon name='ios-call'/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

TransactionsContainer.propTypes = {
  transactions: PropTypes.array,
  navigator: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)

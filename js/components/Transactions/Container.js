/**
 * Created by fbojor on 01.12.2016.
 */
import React, {Component, PropTypes} from "react";
import {Text, Alert} from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon} from "native-base";
import {connect} from "react-redux";
import List from "./List/List";
import TransactionForm from "../TransactionForm";
import Login from "../Login";
import firebase from "firebase";
import Chart from "../Chart";
import {bindActionCreators} from "redux";
import {updateTransactions} from "../../actions/transactionActions";

class TransactionsContainer extends Component {
  constructor(context) {
    super(context);

    this.onTransactionClick = this.onTransactionClick.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onOpenChartClick = this.onOpenChartClick.bind(this);

    this.transactionsRef = firebase.database().ref('transactions-react');
  }

  componentDidMount() {
    this.listenForTransactions();
  }

  listenForTransactions() {
    console.log('listen');
    this.transactionsRef.on('value', (dataSnapshot) => {
      var transactions = [];

      dataSnapshot.forEach((child) => {
        transactions.push({
          details: child.val().details,
          category: child.val().category,
          price: child.val().price,
          id: child.key
        });
      });
      this.props.actions.updateTransactions(transactions);
    });
  }

  onTransactionClick(event, transactionId) {
    event.preventDefault();
    console.log(transactionId);
    const transaction = this.props.transactions.find(t=>t.id === transactionId);

    if (transaction) {
      this.props.navigator.push({
        component: TransactionForm,
        passProps: {
          transaction
        }
      })
    }
  }

  onAddButtonClick() {
    this.props.navigator.push({
      component: TransactionForm
    })
  }

  onRemoveClick(event, transactionId) {
    event.preventDefault();
    console.log('remove', transactionId);
    Alert.alert(
      'Remove',
      'Are you sure you want to remove this parishioner ?',
      [
        {text: 'Yes', onPress: () => this.transactionsRef.child(transactionId).remove()},
        {text: 'Cancel', onPress: () => {}}
      ]
    )
  }

  onLogoutClick() {
    let me = this;
    firebase.auth().signOut().then(function () {
      console.log('Signed Out');
      me.props.navigator.push({
        component: Login
      })
    }, function (error) {
      console.error('Sign Out Error', error);
    });
  }

  onOpenChartClick() {
    console.log('openchart');
    this.props.navigator.push({
      component: Chart
    })
  }

  render() {
    console.log('transactions');
    return (
      <Container>
        <Header>
          <Title>Transactions</Title>
        </Header>

        <Content>
          {this.props.transactions &&
          <List transactions={this.props.transactions}
                onItemClick={this.onTransactionClick}
                onRemoveClick={this.onRemoveClick}/>}
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent onPress={this.onAddButtonClick}>
              <Icon name='ios-add-circle-outline'/>
            </Button>
            <Button transparent onPress={this.onOpenChartClick}>
              <Icon name='ios-aperture'/>
            </Button>
            <Button transparent onPress={this.onLogoutClick}>
              <Icon name='ios-log-out-outline'/>
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
  return {
    actions: bindActionCreators({updateTransactions}, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)

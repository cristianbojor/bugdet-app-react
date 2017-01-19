import * as actionTypes from "../constants/actionTypes";
import firebase from 'firebase';

export function saveTransaction(transaction) {
  firebase.database().ref(`/transactions-react/${transaction.details}`).set(transaction);
}

export function updateTransactions(transactions) {
  return function (dispatch) {
    return dispatch({type: actionTypes.UPDATE_TRANSACTIONS_SUCCESS, transactions});
  };
}

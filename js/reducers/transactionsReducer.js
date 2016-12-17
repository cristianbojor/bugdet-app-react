import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.transactions, action) {
  switch (action.type) {
    case actionTypes.SAVE_TRANSACTION_SUCCESS: {
      const newTransaction = action.transaction;

      //if there is an id, remove the old transaction identified by it.
      const newTransactions = newTransaction.id ? [...state].filter(t=>t.id != newTransaction.id) : state;

      return [...newTransactions, newTransaction];
    }
    default:
      return state
  }
}


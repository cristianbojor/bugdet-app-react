import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.transactions, action) {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION_SUCCESS: {
      return [...state, action.transaction]
    }
    default:
      return state
  }
}


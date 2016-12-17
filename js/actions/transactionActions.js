import * as actionTypes from "../constants/actionTypes";

export function saveTransaction(transaction) {
  return function (dispatch) {
    return dispatch({type: actionTypes.SAVE_TRANSACTION_SUCCESS, transaction});
  };
}

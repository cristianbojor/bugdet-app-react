import {combineReducers} from "redux";
import user from "./userReducer";
import categories from "./categoriesReducer";
import transactions from "./transactionsReducer";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  user,
  transactions,
  categories,
  form: formReducer,
});

export default rootReducer;

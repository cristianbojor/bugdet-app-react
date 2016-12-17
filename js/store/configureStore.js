import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";


export default function configureStore(initialStore) {
  return createStore(
    rootReducer,
    initialStore,
    compose(
      applyMiddleware(thunk),
    ));
}


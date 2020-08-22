import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import thank from "redux-thunk";

const cimposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSER__ || compose

const store = createStore(
  rootReducer,
  cimposeEnhancers(applyMiddleware(thank))
);

export default store;
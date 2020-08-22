import { combineReducers } from 'redux';
//import card from "./card";
import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";


const rootReducer = combineReducers({
  //card,
  filters,
  pizzas,
  cart
})

export default rootReducer;
import { combineReducers } from 'redux';
//import card from "./card";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";


const rootReducer = combineReducers({
  //card,
  filters: filtersReducer,
  pizzas: pizzasReducer,
})

export default rootReducer;
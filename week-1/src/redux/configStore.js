import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import quiz from "./modules/quiz";
import rank from "./modules/rank"
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const middlewares = [thunk]

const rootReducer = combineReducers({ quiz, rank });

const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);

export default store;
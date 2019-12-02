//? Redux
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

//? Reducers And Actions
import {rootReducers} from './Reducers/reducers'

//? Store of redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(thunk)));


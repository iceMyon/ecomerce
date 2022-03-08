import {combineReducers} from "redux";
import testReducer from "./test.reducer";
import {connectRouter, RouterState} from "connected-react-router";
import {History} from "history"
import authReducer, {AuthState} from "./auth.reducer";

export interface AppState{
  router:RouterState
  auth:AuthState
}

const createRootReducer = (history: History) => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  auth:authReducer
})

export default createRootReducer

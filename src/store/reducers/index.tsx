import {combineReducers} from "redux";
import testReducer from "./test.reducer";
import {connectRouter, RouterState} from "connected-react-router";
import {History} from "history"

export interface AppState{
  router:RouterState
}

const createRootReducer = (history: History) => combineReducers({
  test: testReducer,
  router: connectRouter(history)
})

export default createRootReducer

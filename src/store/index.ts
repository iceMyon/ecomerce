import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducers";
import {createHashHistory} from "history"
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";

export const history =createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history),sagaMiddleware))


sagaMiddleware.run(rootSaga)
//routerMiddleware的作用是监听路由状态，路由状态发生改变的时候去dispatch一个action

export default store



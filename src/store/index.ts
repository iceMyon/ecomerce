import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducers";
import {createHashHistory} from "history"
import {routerMiddleware} from "connected-react-router";

export const history =createHashHistory()

const store = createStore(createRootReducer(history),applyMiddleware(routerMiddleware(history)))

//routerMiddleware的作用是监听路由状态，路由状态发生改变的时候去dispatch一个action

export default store



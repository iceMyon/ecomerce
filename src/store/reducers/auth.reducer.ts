import {AuthUnionType, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS} from "../actions/auth.actions";
import {message} from "antd";

export interface AuthState {
  signup: {
    loaded: boolean,
    success: boolean
  }
}

const intialState: AuthState = {
  signup: {
    loaded: false,
    success: false
  }
}


export default function authReducer(
  state = intialState,
  action: AuthUnionType) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true
        }
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message:action.message
        }
      }
    default:
      return state

  }


}

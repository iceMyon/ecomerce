import {put,takeEvery} from "redux-saga/effects"
import axios from "axios"
import {SIGNUP, SignupAction, SignupFail, signupSuccess} from "../actions/auth.actions";
import {API} from "../../config";

function* handleSignup(action:SignupAction){
  try {
    // @ts-ignore
    let response = yield axios.post(`${API}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error:any) {
    yield put(SignupFail(error.response.data.error))
  }
}

export default function* authSaga(){
  yield takeEvery(SIGNUP,handleSignup)
}

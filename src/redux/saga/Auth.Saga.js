import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AuthApi } from '../../context/AuthApi';
import { setAlert } from '../action/alter';
import * as ActionTypes from '../ActionType'


function* SignUp(action) {
   try {
      const user = yield call(AuthApi, action.payload);
      yield put(setAlert({ text: user.payload, color: "success" }))
  } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
  }
}
function* signIn(action) {
   try {
      const user = yield call(AuthApi, action.payload);
      yield history.push("/")
      yield put(setAlert({ text: "Login Succesfull.", color: "success" }))
  } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
  }
}
function* signUpWatcher() {
  yield takeEvery( ActionTypes.SIGN_UP, SignUp);
}
function* signInWatcher() {
   yield takeEvery(ActionTypes.SIGN_IN, signIn);
}
export function* AllWatch() {
   yield all([
      signUpWatcher(),
      signInWatcher()
   ])
}

export default SignUp;
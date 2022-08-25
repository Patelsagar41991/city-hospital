import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthApi } from '../../context/AuthApi';
import * as ActionTypes from '../ActionType'


function* SignUp(action) {
   try {
      const user = yield call(AuthApi, action.payload);
        console.log(user)
   } catch (e) {
      if (e.payload === "auth/email already in used") {
         console.log("Tthis email is all ready use")
     }else{
      console.log("Tthis email ")
     }
   }
}
function* signIn(action) {
   try {
       const user = yield call(AuthApi, action.payload);
       console.log(user)
   } catch (e) {
       if (e.payload === "auth/wrong-password") {
           console.log("please correct email and password")
       }
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
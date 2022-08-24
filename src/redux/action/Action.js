import * as Actiontypes from '../ActionType'

export const signinAction = (values) => (dispatch) => {

    dispatch({ type : Actiontypes.SIGN_UP, payload : values})
}
export const signUpAction = (values) => (dispatch) => {

    dispatch({ type : Actiontypes.SIGN_IN, payload : values})
}
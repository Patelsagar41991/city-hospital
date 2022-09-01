import * as Actiontypes from '../ActionType'

export const setAlertValue = (data) => (dispatch) => {
    dispatch({type: Actiontypes.SET_ALERT, payload: data})
}
export const resetAlertValue = () => (dispatch) =>{
    dispatch({type: Actiontypes.RESET_ALERT})
}

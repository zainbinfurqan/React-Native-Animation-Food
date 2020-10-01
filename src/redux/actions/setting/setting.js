

export const SWITCHTOGGAL = 'SWITCHTOGGAL'

const action = {};

action.SwitchTheme = function (flag) {
    return function (dispatch) {
        dispatch({ type: SWITCHTOGGAL, payload: flag })

    }
}
export default action
//
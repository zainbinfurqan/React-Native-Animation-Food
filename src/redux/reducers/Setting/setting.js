import { SWITCHTOGGAL } from '../../actions/setting/setting'

const initalState = {
    themeToggle: false
}

export default function (state = initalState, action) {
    switch (action.type) {
        case SWITCHTOGGAL:
            return { ...state, themeToggle: action.payload }
        default:
            return state;
    }
}
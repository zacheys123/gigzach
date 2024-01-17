import { THEME } from "../actions"
export const auth_state={
    theme:false,
}

export const auth=(action,state={auth_state})=>{
    switch(action.type){
        case THEME:
            return {...state,theme:!action.payload}
        default:
            return state
    }
}

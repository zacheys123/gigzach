import { THEME } from "../actions"

export const social_state={
    theme:false,
}
export const social=(action,state={social_state})=>{
    switch(action.type){
        case THEME:
            return {...state,theme:!action.payload}
        default:
            return state
    }
}
 



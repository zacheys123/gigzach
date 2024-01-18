import { SHOWFORM, THEME } from "../actions"
export const auth_state={
    registerform:false,
}

export const auth=(action,state={auth_state})=>{
    switch(action.type){
        case SHOWFORM:
            return {...state,registerform:true}
        default:
            return state
    }
}

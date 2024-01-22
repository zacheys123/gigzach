import { SHOWFORM, SHOWLOGIN, THEME } from "../actions"
export const auth_state={
    registerform:false,
    loginform:false
}

export const auth=(action,state={auth_state})=>{
    switch(action.type){
        case SHOWFORM:
            return {...state,registerform:true}
            case SHOWLOGIN:
                return {...state,loginform:true}
        default:
            return state
    }
}

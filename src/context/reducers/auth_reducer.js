import { SHOWFORM, SHOWLOGIN, THEME } from "../actions"
export const auth_state={
auth__route:false
}

export const auth=(action,state={auth_state})=>{
    switch(action.type){
        case SHOWFORM:
            return {...state,auth__route:true}
            case SHOWLOGIN:
                return {...state,auth__route:true}
        default:
            return state
    }
}

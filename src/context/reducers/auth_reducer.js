import { THEME } from "../../actions"
import  {auth_state} from './auth_state'
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

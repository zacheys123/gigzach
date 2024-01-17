import { THEME } from "../../actions"
import  {social_state} from './social_state'

export const index=(action,state={social_state})=>{
    switch(action.type){
        case THEME:
            return {...state,theme:!action.payload}
        default:
            return state
    }
}
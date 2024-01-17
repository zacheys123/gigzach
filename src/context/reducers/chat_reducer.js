import { THEME } from "../../actions"
import  {chat_state} from './chat_state'
export const chat_state={
    theme:false,
}

export const chat=(action,state={chat_state})=>{
    switch(action.type){
        case THEME:
            return {...state,theme:!action.payload}
        default:
            return state
    }
}

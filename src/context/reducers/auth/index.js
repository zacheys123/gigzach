import { THEME } from "../../actions"
import  {auth_state} from './auth_state'

const  index=(action,state={auth_state})=>{
    switch(action.type){
        case THEME:
            return {...state,theme:!action.payload}
        default:
            return state
    }
}
export default index
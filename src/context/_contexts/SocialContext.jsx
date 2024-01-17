import React, { useContext, useReducer } from 'react'
import { SocialProvider } from '../config'
import {social,social_state} from '../reducers/social_reducer'


const SocialContext = ({children}) => {

    const [state,dispatch]=useReducer(social,social_state)
    let value= {state,dispatch}
  return (
    <SocialProvider.Provider value={value}>
      {children}
    </SocialProvider.Provider>
  )
}

export default SocialContext


export const useSocialContext=()=>{
    const context=useContext(SocialProvider)
    if(!context){
        throw new Error('useSocialContext must be used within SocialContextProvider')
    }
    return context
}
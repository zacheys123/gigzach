import React, { useContext, useReducer } from 'react'
import { SocialContext } from '../config'
const SocialContextProvider = ({children}) => {

    const [social,setSocial]=useReducer(socialreducer,social_state,false)
    const value= {social,setSocial}
  return (
    <SocialContext.Provider value={value}>
      {children}
    </SocialContext.Provider>
  )
}

export default SocialContext


export const useSocialContext=()=>{
    const context=useContext(SocialContext)
    if(!context){
        throw new Error('useSocialContext must be used within SocialContextProvider')
    }
    return context
}
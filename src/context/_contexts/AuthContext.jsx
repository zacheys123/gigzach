import React, { useContext, useReducer } from 'react'
import { AuthProvider } from '../config'
import auth_reducer from '../reducers/auth'
import {auth_state } from '../reducers/auth/auth_state'
const AuthContext = ({children}) => {

    const[auth,setAuth]=useReducer(auth_reducer,auth_state)

    let value={auth,setAuth}
      return (
    <AuthProvider.Provider value={value}>
      {children}
    </AuthProvider.Provider>
  )
}


export  const useAuthContext=()=>{
const context=useContext(AuthProvider)
if(!context){
    throw new Error('useAuthContext must be used within AuthContextProvider')
}
    return context
}
export default AuthContext

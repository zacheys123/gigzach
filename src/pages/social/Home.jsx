import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH_DASHBOARD } from '../../routes/paths'
import  {useSocialContext} from '../../context/_contexts/SocialContext'
import { THEME } from '../../context/actions'
const Home = () => {
  const {state:{theme},dispatch}=useSocialContext()
  
  const nav=useNavigate()
  console.log(theme)
  return (
    <div>
      <button onClick={()=>{dispatch({type:THEME,payload:theme})}}>Home</button>
    </div>
  )
}

export default Home

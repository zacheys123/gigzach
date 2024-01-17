import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH_DASHBOARD } from '../../routes/paths'

const Home = () => {
  const nav=useNavigate()
  return (
    <div>
      <button onClick={()=>nav(PATH_DASHBOARD.general.chat)}>Home</button>
    </div>
  )
}

export default Home

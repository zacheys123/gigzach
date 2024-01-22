import React, { useState } from "react";
import { FormContainer } from "../../css/auth_style";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {SHOWFORM} from '../../context/actions'
import { SettingsBackupRestoreSharp } from "@mui/icons-material";
import {useAuthContext} from '../../context/_contexts/AuthContext'
const Register = () => {

  const{
    authstate:{registerform},
    setAuth
  }=useAuthContext()

  console.log(Array(10).fill(0,10))
  const[f_page,setF]=useState(false)
  const[s_page,setS]=useState(false)
  const[t_page,setT]=useState(true)
  const[q_page,setQ]=useState(false)
  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert("form submitted");
  };
  const [form_data, setData] = useState({
    firstname: "",
    second: "",
    username: "",
    email: "",
    password: "",
    confirmpass: "",
    tel:'',
    day:'',
    month:'',
    year:'',
    city:'',
    country:'',
  });

  const handleInput=(ev)=>{
    setData({...form_data,[ev.target.name]:ev.target.value})
  }
  const myArray=["January","February","March","April","May","June","July","August","September","October","November","December"]
 return (
    <Box className="form-container">
    <form action="" onSubmit={handleSubmit}>
      <motion.div initial=
      {{x:'300px',opacity:0}} animate={{x:[0,-125,0],opacity:[1,0,0,0,1]}}>
<h5 style={{color:'white',fontFamily:'monospace'}}>Personal info</h5>
{f_page &&
<>
<input
      type="text"
      name="firstname"
      value={form_data.firstname}
      onChange={handleInput}
      placeholder="Enter Firstname"
    />

    <input
      type="text"
      name="second"
      value={form_data.second}
     onChange={handleInput}
      placeholder="Enter Second Name"
   
    />

    <input
      type="text"
      name="username"
      value={form_data.username}
      onChange={handleInput}
      placeholder="Username"
    />
        <input
      type="text"
      name="email"
      value={form_data.email}
      onChange={handleInput}
      placeholder="Email Address"
    />

<div style={{textAlign:'right',margin:'.8rem auto'}}>
      <Button variant="contained" sx={{fontFamily:'monospace'}}>Next</Button>
      </div>
    </>


} 
  {/*load the second page*  */}
{s_page &&
  <motion.div>
<input
      type="text"
      name="firstname"
      value={form_data.firstname}
      onChange={handleInput}
      placeholder="Enter Firstname"
    />

    <input
      type="text"
      name="second"
      value={form_data.tel}
     onChange={handleInput}
      placeholder="Tel No...."
   
    />

    <input
      type="text"
      name="city"
      value={form_data.country}
      onChange={handleInput}
      placeholder="Country"
    />
        <input
      type="text"
      name="email"
      value={form_data.city}
      onChange={handleInput}
      placeholder="City"
    />
  

    <div style={{textAlign:'right',margin:'.8rem auto'}}>
      <Button variant="contained" sx={{fontFamily:'monospace'}}>Next</Button>
      </div>
      </motion.div>
}
{/* load the third page */}
{t_page &&
<motion.div>

  <div style={{}}>
    <h6 style={{color:'white',marginBottom:'.1rem'}}>Date of Birth:</h6>
    <select name='day' value={form_data.day} onChange={handleInput} placeholder="gvfgfrgbv">
      {
Array(31).fill().map((_, idx) => 
  <option value={idx + 1}  key={idx}>{idx + 1}</option>
)
      }
    </select>
  </div>

  <div style={{}}>
    <h6 style={{color:'white',marginBottom:'.1rem'}}>Month:</h6>
    <select name='month' value={form_data.month} onChange={handleInput}>
      {
myArray.map((_month, idx) => 
  <option value={_month}  key={idx}>{_month}</option>
)
      }
    </select>


    </div>

    <input
      type="text"
      name="year"
      value={form_data.year}
     onChange={handleInput}
      placeholder="Enter las two digits of the year"
   
    />

    <div style={{textAlign:'right',margin:'.8rem auto'}}>
      <Button variant="contained" sx={{fontFamily:'monospace'}}>Next</Button>
      </div>

</motion.div>
}
{/* load the fourth page */}
{q_page &&
<motion.div>
<input
      type="text"
      name="second"
      value={form_data.second}
     onChange={handleInput}
      placeholder="Enter Second Name"
   
    />

    <input
      type="text"
      name="username"
      value={form_data.username}
      onChange={handleInput}
      placeholder="Username"
    />
        <input
      type="text"
      name="email"
      value={form_data.email}
      onChange={handleInput}
      placeholder="Email Address"
    />
  

    <div style={{textAlign:'right',margin:'.8rem auto'}}>
      <Button variant="contained" sx={{fontFamily:'monospace'}}>Next</Button>
      </div>

</motion.div>
}



      </motion.div>

  
    </form> 
    </Box>
  );
};

export default Register;

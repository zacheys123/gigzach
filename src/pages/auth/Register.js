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
 return (
    <Box className="form-container">
    <form action="" onSubmit={handleSubmit}>
      <motion.div initial=
      {{x:'300px',opacity:0}} animate={{x:[0,-125,0],opacity:[1,0,0,0,1]}}>
<h5 style={{color:'white',fontFamily:'monospace'}}>Personal info</h5>
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
      </motion.div>
  
    </form> 
    </Box>
  );
};

export default Register;

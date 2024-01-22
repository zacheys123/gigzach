import React, { useState } from "react";
import { FormContainer } from "../../css/auth_style";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from '../../assets/auth2.gif'
import logo2 from '../../assets/lock.gif'
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
  return (
    <Box className="form-container">
    <form action="" onSubmit={handleSubmit}>
      <motion.div>
<h5 style={{color:'white',fontFamily:'monospace'}}>Personal info</h5>
<input
      type="text"
      name="Firstname"
      value={form_data.firstname}
      onChange={(ev) => {
      setData({ ...form_data, firstname: ev.target.value });
      }}
      placeholder="Enter Firstname"
    />

    <input
      type="text"
      name="second"
      value={form_data.second}
      onChange={(ev) => {
      setData({ ...form_data, second: ev.target.value });
      }}
      placeholder="Enter Second Name"
   
    />

    <input
      type="text"
      name="Username"
      value={form_data.username}
      onChange={(ev) => {
      setData({ ...form_data, Username: ev.target.value });
      }}
      placeholder="Username"
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

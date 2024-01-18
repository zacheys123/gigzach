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
    <FormContainer>
      
       <div className="logo"><h6>Welcome to GigMe</h6></div>
      <Box sx={{background:'white',width:'60%',height:'80%',opacity:.8,display:'flex',}}>
     
        <Box className="auth__left">
        <Box>
        <h4>GigMe App</h4>
        <Typography variant='subtitle2' className="typo">For an <span style={{fontFamily:'georgia',color:'purple',fontWeight:'bold'}}>AMAZING</span> experience to be able to <span style={{fontFamily:'monospace',fontWeight:'bold',color:'red'}}>Connect</span>  with fellow <span style={{fontFamily:'monospace',fontWeight:'bold',color:'green'}}>Musicians</span>  and also earn a living
        </Typography>
  <h5><span style={{fontFamily:'monospace',fontWeight:'bold',color:'red'}}>Connect</span> with friends and get access to <span style={{fontFamily:'monospace',fontWeight:'bold',color:'blue',}}>Latest</span>  gigs and projects <span style={{fontFamily:'monospace',fontWeight:'bold',color:'brown'}}>Provided</span>  by you and <span style={{fontFamily:'monospace',fontWeight:'bolder',color:'green'}}>Connect</span>  by you</h5>
       </Box>
  
        </Box>
        <Box className="auth__right">
          {" "}
          {!registerform ?
         <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
          <Box>            
            <img src={logo} className="img"/>
            <img src={logo2} className="img1"/>
            </Box>
          
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flexDirection:'column'}}>
              <Box className="button"  sx={{width:"80%",padding:'.8rem',textAlign:'center',background:"red",color:'white',margin:'1rem',borderRadius:'88px'}} variant="contained"
             >Sign in</Box>
        <Box className="button" sx={{width:"80%",padding:'.8rem',textAlign:'center',background:"blue",color:'white',margin:'1rem',borderRadius:'88px'}}  variant="contained"  
        onClick={()=>setAuth({type:SHOWFORM})}>Sign Up</Box>
       </Box>
         
          </Box>
      :
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
}
        </Box>
          
      </Box>
    </FormContainer>
  );
};

export default Register;

import React, { useState } from "react";
import { FormContainer } from "../../css/auth_style";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from '../../assets/auth2.gif'
import logo2 from '../../assets/settings1.gif'
const Register = () => {
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
        <Typography variant='subtitle2' className="typo">For an amazing experience to be able to connect with fellow musicians and also earn a living
        </Typography>
  <h5>Connect with friends and get access to latest gigs and projects provided by you and controlled by you</h5>
       </Box>
       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flexDirection:'column'}}><Box  sx={{width:"80%",padding:'.8rem',textAlign:'center',background:"red",color:'white',margin:'1rem',borderRadius:'88px'}} variant="contained">Sign in</Box>
        <Box sx={{width:"80%",padding:'.8rem',textAlign:'center',background:"blue",color:'white',margin:'1rem',borderRadius:'88px'}}  variant="contained">Sign Up</Box>
       </Box>
        </Box>
        <Box className="auth__right">
          {" "}
         <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
          <img src={logo} className="img"/>
          <img src={logo2} className="img1"/>
          </Box>
          {/* <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Firstname"
            value={form_data.Firstname}
            onChange={(ev) => {
              setData({ ...form_data, Firstname: ev.target.value });
            }}
          />

          <input
            type="text"
            name="second"
            value={form_data.second}
            onChange={(ev) => {
              setData({ ...form_data, second: ev.target.value });
            }}
          />

          <input
            type="text"
            name="Username"
            value={form_data.Username}
            onChange={(ev) => {
              setData({ ...form_data, Username: ev.target.value });
            }}
          />

          <input
            type="text"
            name="Email"
            value={form_data.Email}
            onChange={(ev) => {
              setData({ ...form_data, Email: ev.target.value });
            }}
          />
          <button type="submit">Register</button>
          <span>
            already have an account,
            <Link to={PATH_DASHBOARD.general.login}></Link>
          </span>
        </form> */}
        </Box>
      </Box>
    </FormContainer>
  );
};

export default Register;

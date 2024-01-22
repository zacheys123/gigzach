import { Box, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { FormContainer } from "../../css/auth_style";
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/_contexts/AuthContext';
import { PATH_DASHBOARD } from '../../routes/paths';
import logo from '../../assets/auth2.gif'
import logo2 from '../../assets/lock.gif'
import { SHOWFORM, SHOWLOGIN } from '../../context/actions';

const index = () => {
	const{
		authstate:{auth__route},
		setAuth
	  }=useAuthContext()
	const nav=useNavigate()
	  const handleSignup=()=>{
		setAuth({type:SHOWFORM})
	nav(PATH_DASHBOARD.general.register)
	  }
	  const handleSignin=()=>{
		setAuth({type:SHOWLOGIN})
		nav(PATH_DASHBOARD.general.login)
	  }
	return (
		<Box sx={{background:'black',width:'100vw',height:'100vh'}}>
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
 {!auth__route ?
		<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
		 <Box>            
		   <img src={logo} className="img"/>
		   <img src={logo2} className="img1"/>
		   </Box>
		 
		   <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flexDirection:'column'}}>
			 <Box className="button"  sx={{width:"80%",padding:'.8rem',textAlign:'center',background:"red",color:'white',margin:'1rem',borderRadius:'88px'}} variant="contained"
			 onClick={handleSignin}>Sign in</Box>
	   <Box className="button" sx={{width:"80%",padding:'.8rem',textAlign:'center',background:"blue",color:'white',margin:'1rem',borderRadius:'88px'}}  variant="contained"  
	   onClick={handleSignup}>Sign Up</Box>
	  </Box>
		
		 </Box>
	 :
	 <Outlet />
}
	   </Box>
		 
	 </Box>
   </FormContainer>
		
		
		</Box>
	);
};

export default index;

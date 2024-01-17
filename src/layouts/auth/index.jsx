import { Box } from '@mui/material';
import React from 'react';

import { Outlet } from 'react-router-dom';


const index = () => {
	return (
		<Box sx={{background:'black',width:'100vw',height:'100vh'}}>
		
			<Outlet />
		
		</Box>
	);
};

export default index;

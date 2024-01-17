import { Box } from '@mui/material';
import React from 'react';

import { Outlet } from 'react-router-dom';


const index = () => {
	return (
		<Box>
		
			<Outlet />
		
		</Box>
	);
};

export default index;

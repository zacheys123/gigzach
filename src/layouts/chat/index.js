import React from 'react';
import { Outlet } from 'react-router-dom';


import { Box, Stack } from '@mui/material';

const index = () => {
	return (
		<Box>
	
			<Box>
				{' '}
				<Outlet />
			</Box>
			
		</Box>
	);
};

export default index;

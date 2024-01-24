import React from 'react';
import { Button } from '@mui/material';
const NextButton = ({ onclick, errormessage, error }) => {
	return (
		<div style={{ margin: '.8rem auto' }}>
			{error && (
				<p style={{ textAlign: 'center', color: 'red' }}>
					{errormessage}
				</p>
			)}
			<div style={{ textAlign: 'right' }}>
				{' '}
				<Button
					variant="contained"
					sx={{ fontFamily: 'monospace' }}
					onClick={onclick}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default NextButton;

import React from 'react';
import { BuildTwoTone } from '@mui/icons-material';
const NextButton = ({ onClick, errormessage, error }) => {
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
					onClick={onClick}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default NextButton;

import React, { useState, useRef, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';
import { Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
	const [pass, setPass] = useState(false);
	const [cpass, setCPass] = useState(false);
	const [error, setError] = useState(false);
	const [errormessage, setErrorMessage] = useState('');
	const handleSubmit = (ev) => {
		ev.preventDefault();
		alert('form submitted');
	};
	const nav = useNavigate();
	const [form_data, setData] = useState({
		email: '',
		password: '',
		confirmpass: '',
	});
	const handleInput = (ev) => {
		setData({ ...form_data, [ev.target.name]: ev.target.value });
	};
	return (
		<motion.div className="form-container">
			<form action="">
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<input
						type={pass ? 'text' : 'password'}
						name="password"
						value={form_data.pass}
						onChange={handleInput}
						placeholder="Enter password"
					/>
					{pass ? (
						<VisibilityOffIcon
							sx={{ color: 'white', cursor: 'pointer' }}
							onClick={() => setPass(false)}
						/>
					) : (
						<VisibilityIcon
							sx={{ color: 'white', cursor: 'pointer' }}
							onClick={() => setPass(true)}
						/>
					)}
				</div>

				<div style={{ display: 'flex', alignItems: 'center' }}>
					<input
						type={cpass ? 'text' : 'password'}
						name="confirmpass"
						value={form_data.confirmpass}
						onChange={handleInput}
						placeholder="Confirm Password"
					/>
					{cpass ? (
						<VisibilityOffIcon
							sx={{ color: 'white', cursor: 'pointer' }}
							onClick={() => setCPass(false)}
						/>
					) : (
						<VisibilityIcon
							sx={{ color: 'white', cursor: 'pointer' }}
							onClick={() => setCPass(true)}
						/>
					)}
				</div>

				<div style={{ textAlign: 'center', margin: '.8rem auto' }}>
					{error && <p>{errormessage}</p>}
					<Button
						variant="contained"
						sx={{ fontFamily: 'monospace', textTransform: 'none' }}
					>
						Sign In
					</Button>
					<p style={{ color: 'white', fontFamily: 'monospace' }}>
						Don't have an Account??
						<span
							style={{
								color: 'greenyellow',
								marginLeft: '.3rem',
								cursor: 'pointer',
							}}
							onClick={() => nav(PATH_DASHBOARD.general.register)}
						>
							Sign Up
						</span>
					</p>
				</div>
			</form>
		</motion.div>
	);
};

export default Login;

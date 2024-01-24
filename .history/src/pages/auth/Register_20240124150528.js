import React, { useState, useRef, useEffect } from 'react';
import { FormContainer } from '../../css/auth_style';
import { Link } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';
import { Button, Box, Typography } from '@mui/material';
import { motion } from 'node_modules/framer-motion/dist/es;
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { SHOWFORM } from '../../context/actions';
import { SettingsBackupRestoreSharp } from '@mui/icons-material';
import { useAuthContext } from '../../context/_contexts/AuthContext';
import {
	setFirst,
	setSecond,
	setThird,
	setSec,
	setThirdButton,
} from '../../components/utils';
const Register = () => {
	const { setAuth } = useAuthContext();
	const [page, setPage] = useState({
		first: false,
		second: false,
		third: false,
		fourth: false,
	});
	const form_ref = useRef();
	const [pass, setPass] = useState(false);
	const [cpass, setCPass] = useState(false);
	const handleSubmit = (ev) => {
		ev.preventDefault();
		alert('form submitted');
	};
	const [form_data, setData] = useState({
		firstname: '',
		second: '',
		username: '',
		email: '',
		password: '',
		confirmpass: '',
		tel: '',
		day: '',
		month: '',
		year: '',
		city: '',
		country: '',
	});
	const [error, setError] = useState(false);
	const [errormessage, setErrorMessage] = useState('');
	const handleInput = (ev) => {
		setData({ ...form_data, [ev.target.name]: ev.target.value });
	};
	const myArray = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	useEffect(() => {
		form_ref.current = form_data;
	}, []);
	return (
		<Box className="form-container">
			<form action="" onSubmit={handleSubmit}>
				<motion.div
					initial={{ x: '300px', opacity: 0 }}
					animate={{ x: [0, -125, 0], opacity: [1, 0, 0, 0, 1] }}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<h5 style={{ color: 'white', fontFamily: 'monospace' }}>
							Personal info
						</h5>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<>
								<span>1</span>
								<span>2</span>
								<span>3</span>
							</>
							<span>back to top</span>
						</div>
					</div>

					{!page.first && (
						<>
							<input
								type="text"
								name="firstname"
								value={form_data.firstname}
								onChange={handleInput}
								placeholder="Enter Firstname"
							/>

							<input
								type="text"
								name="second"
								value={form_data.second}
								onChange={handleInput}
								placeholder="Enter Second Name"
							/>

							<input
								type="text"
								name="username"
								value={form_data.username}
								onChange={handleInput}
								placeholder="Username"
							/>
							<input
								type="text"
								name="email"
								value={form_data.email}
								onChange={handleInput}
								placeholder="Email Address"
							/>

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
										onClick={() =>
											setFirst(
												setPage,
												setErrorMessage,
												setError,
												form_data,
											)
										}
									>
										Next
									</Button>
								</div>
							</div>
						</>
					)}
					{/*load the second page*  */}
					{page.second && (
						<motion.div>
							<input
								type="text"
								name="firstname"
								value={form_data.firstname}
								onChange={handleInput}
								placeholder="Enter Address(optional)"
							/>

							<input
								type="text"
								name="second"
								value={form_data.tel}
								onChange={handleInput}
								placeholder="Tel No....(optional)"
							/>

							<input
								required
								type="text"
								name="city"
								value={form_data.country}
								onChange={handleInput}
								placeholder="Country"
							/>
							<input
								required
								type="text"
								name="email"
								value={form_data.city}
								onChange={handleInput}
								placeholder="City"
							/>

							<div
								style={{ textAlign: 'right', margin: '.8rem auto' }}
							>
								{error && <p>{errormessage}</p>}
								<Button
									variant="contained"
									sx={{ fontFamily: 'monospace' }}
									onClick={() =>
										setSecond(
											setAuth,
											setErrorMessage,
											setError,
											form_data,
										)
									}
								>
									Next
								</Button>
							</div>
						</motion.div>
					)}
					{/* load the third page */}
					{page.third && (
						<motion.div>
							<div style={{}}>
								<h6 style={{ color: 'white', marginBottom: '.1rem' }}>
									Date of Birth:
								</h6>
								<select
									name="day"
									value={form_data.day}
									onChange={handleInput}
									placeholder="gvfgfrgbv"
								>
									{Array(31)
										.fill()
										.map((_, idx) => (
											<option value={idx + 1} key={idx}>
												{idx + 1}
											</option>
										))}
								</select>
							</div>

							<div style={{}}>
								<h6 style={{ color: 'white', marginBottom: '.1rem' }}>
									Month:
								</h6>
								<select
									name="month"
									value={form_data.month}
									onChange={handleInput}
								>
									{myArray.map((_month, idx) => (
										<option value={_month} key={idx}>
											{_month}
										</option>
									))}
								</select>
							</div>

							<input
								type="text"
								name="year"
								value={form_data.year}
								onChange={handleInput}
								placeholder="Enter last two digits of the year"
							/>

							<div
								style={{ textAlign: 'right', margin: '.8rem auto' }}
							>
								{error && <p>{errormessage}</p>}
								<Button
									variant="contained"
									sx={{ fontFamily: 'monospace' }}
									onClick={() =>
										setThird(
											setAuth,
											setErrorMessage,
											setError,
											form_data,
										)
									}
								>
									Next
								</Button>
							</div>
						</motion.div>
					)}
					{/* load the fourth page */}
					{page.fourth && (
						<motion.div>
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

							<div
								style={{ textAlign: 'right', margin: '.8rem auto' }}
							>
								{error && <p>{errormessage}</p>}
								<Button
									variant="contained"
									sx={{ fontFamily: 'monospace' }}
								>
									Next
								</Button>
							</div>
						</motion.div>
					)}
				</motion.div>
			</form>
		</Box>
	);
};

export default Register;

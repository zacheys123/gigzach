import React, { useState } from 'react';

const Login = () => {
	return (
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

			<div style={{ textAlign: 'center', margin: '.8rem auto' }}>
				{error && <p>{errormessage}</p>}
				<Button variant="contained" sx={{ fontFamily: 'monospace' }}>
					Register
				</Button>
				<p style={{ color: 'white', fontFamily: 'monospace' }}>
					Already have an Account??
					<span
						style={{
							color: 'greenyellow',
							marginLeft: '.3rem',
							cursor: 'pointer',
						}}
						onClick={() => nav(PATH_DASHBOARD.general.login)}
					>
						Sign in
					</span>
				</p>
			</div>
		</motion.div>
	);
};

export default Login;

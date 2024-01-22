import { Navigate, useRoutes } from 'react-router-dom';

// // layouts

import Main_App from '../layouts/social';
// // config
import Auth from '../layouts/auth/Auth';
import Chat from '../layouts/chat';
// // config
import { DEFAULT_PATH, DEFAULT_PATH_PAGES } from '../config';

// pages
import {
	Chat_Page,Group,
Register,Login,Page404,Home
} from './page_routes';

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <Main_App />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},
				{ path: 'dashboard', element: <Home /> },
				
				{ path: '*', element: <Page404 /> },],
		},
	
		{
			path: '/p_data',
			element: <Chat />,
			children: [
			
				{ path: 'chat_page/:id', element: <Chat_Page /> },
				{ path: 'group/:id', element: <Group /> },
				{ path: '*', element: <Page404 /> },
			
			],
		},
		{
			path: '/auth',
			element: <Auth />,
			children: [
				{ path: 'register', element: <Register /> },
				{ path: 'login', element: <Login /> },
				{ path: '*', element: <Page404 /> },],
			
		},

		{ path: '*', element: <Page404 /> },
	]);
}

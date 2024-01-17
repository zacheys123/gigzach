import { Suspense, lazy } from 'react';

import LoadingScreen from '../components/LoadinScreen';
const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

const Chat_Page = Loadable(lazy(() => import('../pages/chat/Chat')));
const Group = Loadable(lazy(() => import('../pages/chat/Group')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Home = Loadable(lazy(() => import('../pages/social/Home')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));



export { 	Chat_Page,Group,Page404,Home,
	Register,Login };

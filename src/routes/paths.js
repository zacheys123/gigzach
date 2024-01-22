// ----------------------------------------------------------------------

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	general: {
		app: path(ROOTS_DASHBOARD, 'dashboard'),
		home: path(ROOTS_DASHBOARD, 'home'),
		login: path(ROOTS_DASHBOARD, 'auth/login'),
		register: path(ROOTS_DASHBOARD, 'auth/register'),
		chat: path(ROOTS_DASHBOARD, 'p_data/chat_page/:ijhiudfd'),
		group: path(ROOTS_DASHBOARD, 'chat/group/:id'),
	
	},
};

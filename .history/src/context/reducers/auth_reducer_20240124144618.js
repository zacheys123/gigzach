import {
	SHOWFORM,
	SHOWLOGIN,
	THEME,
	SHOWSECONDPAGE,
	SHOWTHIRDPAGE,
	SHOWFOURTHPAGE,
} from '../actions';
export const auth_state = {
	auth__route: false,
	first: true,
	second: false,
	third: false,
	fourth: false,
	headerbutton: false,
};

export const auth = (action, state = { auth_state }) => {
	switch (action.type) {
		case SHOWFORM:
			return { ...state, auth__route: true };
		case SHOWLOGIN:
			return { ...state, auth__route: true };
		case SHOWSECONDPAGE:
			return {
				...state,
				first: false,
				second: true,
				third: false,
				fourth: false,
			};
		case SHOWTHIRDPAGE:
			return {
				...state,
				first: false,
				second: false,
				third: true,
				fourth: false,
				headerbutton: true,
			};
		case SHOWFOURTHPAGE:
			return {
				...state,
				first: false,
				second: false,
				third: false,
				fourth: true,
			};

		default:
			return state;
	}
};

import { SHOWSECONDPAGE } from '../context/actions';

export const setFirst = (
	setPage,
	setErrorMessage,
	setError,
	form_data,
) => {
	if (
		!form_data.firstname ||
		!form_data.lastname ||
		!form_data.email ||
		!form_data.username
	) {
		setError(true);
		setTimeout(() => {
			setErrorMessage('All inputs should be filled');
			setError(false);
		}, 4000);
	} else {
		setPage({
			first: true,
			second: true,
			third: false,
			fourth: false,
		});
	}
};
export const setSecond = () => {};
export const setThird = () => {};
export const setSec = () => {};
export const setThirdButton = () => {};

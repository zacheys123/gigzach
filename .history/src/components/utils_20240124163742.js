import { SHOWSECONDPAGE } from '../context/actions';

export const setFirst = (
	setPage,
	setErrorMessage,
	setError,
	form_data,
) => {
	console.log(form_data);
	if (
		!form_data.firstname ||
		!form_data.second ||
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
export const setSecond = (
	setPage,
	setErrorMessage,
	setError,
	form_data,
) => {
	if (!form_data.country || !form_data.city) {
		setError(true);
		setTimeout(() => {
			setErrorMessage('All inputs should be filled');
			setError(false);
		}, 4000);
	} else {
		setPage({
			first: true,
			second: false,
			third: true,
			fourth: false,
		});
	}
};
export const setThird = (
	setPage,
	setErrorMessage,
	setError,
	form_data,
	page,
) => {
	if (!form_data.year) {
		setError(true);
		setTimeout(() => {
			setErrorMessage('All inputs should be filled');
			setError(false);
		}, 4000);
	} else {
		setPage({
			first: true,
			second: false,
			third: false,
			fourth: true,
			header: ttrue,
		});
	}
};
export const setFourth = (setPage) => {
	setPage({
		first: false,
		second: false,
		third: false,
		fourth: false,
	});
};

export const setThirdButton = () => {};

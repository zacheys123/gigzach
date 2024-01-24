import { SHOWSECONDPAGE } from '../context/actions';

export const setFirst = (
	setPage,
	setErrorMessage,
	setError,
	form_data,
) => {
	setpage({
		first: false,
		second: true,
		third: false,
		fourth: false,
	});
};
export const setSecond = () => {};
export const setThird = () => {};
export const setSec = () => {};
export const setThirdButton = () => {};

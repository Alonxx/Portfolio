import storage from 'local-storage-fallback';

const getInitialTheme = () => {
	const savedTheme = storage.getItem('theme');
	return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'};
};

export default getInitialTheme
export const getItemLocalStore = (item, defaultValue) => {
	const localItem = localStorage.getItem(item);
	const parseItem = localItem ? JSON.parse(localItem) : defaultValue;
	return parseItem;
};

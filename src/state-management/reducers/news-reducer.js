const initialState = {
	news: []
};

const newsReducer = (state = initialState, action) => {
	switch(action.type) {
	default:
		return state;
	case 'SET-ARTICLES':
		return {...state, news: action.articles};
	}
};

export const setArticlesAC = articles => {
	return {
		type: 'SET-ARTICLES',
		articles,
	};
};

export default newsReducer;
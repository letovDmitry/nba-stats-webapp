const SET_GAMES = 'SET-GAMES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_SEASON_YEAR = 'SET-SEASON-YEAR';
const SET_SEASON_YEARS = 'SET-SEASON-YEARS';

let initialState = {
	games: [],
	pages: 0,
	currentPage: 1,
	seasonYear: 2019,
	seasonYears: []
};

const gamesReducer = (state = initialState, action) => {
	switch(action.type) {
	case SET_GAMES: {
		return {...state, games: action.games.games, pages: action.games.pages};
	}
	case SET_CURRENT_PAGE: {
		return {...state, currentPage: action.page};
	}
	case SET_SEASON_YEAR: {
		return {...state, seasonYear: action.seasonYear};
	}
	case SET_SEASON_YEARS: {
		return {...state, seasonYears: [...action.seasonYears]};
	}
	default: {
		return state;
	}
	}
};

export const setGamesAC = games => {
	return {
		type: SET_GAMES,
		games
	};
};

export const setCurrentPageAC = page => {
	return {
		type: SET_CURRENT_PAGE,
		page
	};
};

export const setSeasonYearAC = seasonYear => {
	return {
		type: SET_SEASON_YEAR,
		seasonYear
	};
};

export const setSeasonYearsAC = seasonYears => {
	return {
		type: SET_SEASON_YEARS,
		seasonYears
	};
};

export default gamesReducer;
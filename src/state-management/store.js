import gamesReducer from './reducers/games-reducer';
import newsReducer from './reducers/news-reducer';

const { combineReducers, createStore } = require('redux');

const reducers = combineReducers({
	gamesPage: gamesReducer,
	newsPage: newsReducer,
});

const store = createStore(reducers);

window.state = store.getState();
window.stateCopy = { ...store.getState() };

export default store;

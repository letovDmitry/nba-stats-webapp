import gamesReducer from './reducers/games-reducer'
import newsReducer from './reducers/news-reducer'
import thunk from 'redux-thunk'
import gamePageReducer from './reducers/game-page-reducer'
import searchPageReducer from './reducers/search-page-reducer'
const { combineReducers, createStore, applyMiddleware } = require('redux')

const reducers = combineReducers({
	gamesPage: gamesReducer,
	newsPage: newsReducer,
	gamePage: gamePageReducer,
	searchPage: searchPageReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.state = store.getState()

export default store

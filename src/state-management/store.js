import gamesReducer from './reducers/games-reducer'
import newsReducer from './reducers/news-reducer'
import thunk from 'redux-thunk'
import gamePageReducer from './reducers/game-page-reducer'
const { combineReducers, createStore, applyMiddleware } = require('redux')

const reducers = combineReducers({
	gamesPage: gamesReducer,
	newsPage: newsReducer,
	gamePage: gamePageReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.state = store.getState()

export default store

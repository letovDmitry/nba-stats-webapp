import gamesReducer from './reducers/games-reducer'
import newsReducer from './reducers/news-reducer'
import thunk from 'redux-thunk'
const { combineReducers, createStore, applyMiddleware } = require('redux')

const reducers = combineReducers({
	gamesPage: gamesReducer,
	newsPage: newsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.state = store.getState()

export default store

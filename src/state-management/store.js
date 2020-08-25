import gamesReducer from "./reducers/games-reducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
    gamesPage: gamesReducer
})

let store = createStore(reducers)

window.state = store.getState()
window.stateCopy = {...store.getState()}

export default store;
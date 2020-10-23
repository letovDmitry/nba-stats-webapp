import { APIRequest } from "../../api/api"

const initialState = {
	gameData: {
		
	}
}

const gamesPageReducer = (state = {gameData: {}}, action) => {
	switch(action.type) {
	case 'SET-GAME-DATA': {
		return {...state, gameData: action.gameData}
	}
	default: {
		return state
	}
	}
}

const setGameDataAC = gameData => {
	return {
		type: 'SET-GAME-DATA',
		gameData
	}
}

export const setGameData = id => async dispatch => {
	dispatch(setGameDataAC(await new APIRequest({type: 'GET-GAME-BY-ID', id})))
}

export default gamesPageReducer
import { APIRequest } from "../../api/api";

const searchPageReducer = (state = { players: [] }, action) => {
    switch(action.type) {
        case 'SET-PLAYERS': {
            return {...state, players: action.players}
        }
        
        default:
            return state;
    }
}

export const setPlayersAC = players  => {
    return {
        type: 'SET-PLAYERS',
        players,
    }
}

export const getPlayerById = id => async dispatch => {
    console.log(await new APIRequest({ type: 'GET-PALYER-BY-ID', id, }))
    dispatch(setPlayersAC(await new APIRequest({ type: 'GET-PALYER-BY-ID', id, })));
}

export default searchPageReducer;
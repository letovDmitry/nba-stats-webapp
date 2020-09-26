import * as axios from 'axios'
export class APIRequest {
	constructor(action) {
		switch(action.type) {
		default:
			return
		case 'GET-GAMES': {
			return APIRequest._getGames(action.seasonYear, action.page)
		}
		case 'GET-SEASON-YEARS': {
			return APIRequest._getSeasonYears()
		}
		case 'GET-NEWS': {
			return APIRequest._getNews()
		}
		case 'GET-GAME-BY-ID': {
			return APIRequest._getGameById(action.id)
		}
		case 'GET-PALYER-BY-ID': {
			return APIRequest._getPlayerById(action.id)
		}
		}
	}

	static _getGames(seasonYear, page) {
		return axios({
			'method':'GET',
			'url':`https://api-nba-v1.p.rapidapi.com/games/seasonYear/${seasonYear}`,
			'headers':{
				'content-type':'application/octet-stream',
				'x-rapidapi-host':'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key':'b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2',
				'useQueryString':true
			}
		}).then(res => {
			return {
				games: res.data.api.games.splice(page * 100 - 100, 100),
				pages: Math.ceil(res.data.api.games.length / 100)
			}
		})
	}

	static _getSeasonYears() {
		return axios({
			'method':'GET',
			'url':'https://api-nba-v1.p.rapidapi.com/seasons/',
			'headers':{
				'content-type':'application/octet-stream',
				'x-rapidapi-host':'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key':'b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2',
				'useQueryString':true
			}
		})
			.then( res => res.data.api.seasons)
	}
    
	static _getNews() {
		return axios.get('https://newsapi.org/v2/everything?q=nba&apiKey=b23a34c77d834a399dcda0ee3dce73dd')
			.then(r => r.data.articles)
	}

	static _getGameById(id) {
		return axios({
			'method':'GET',
			'url':`https://api-nba-v1.p.rapidapi.com/games/gameId/${id}`,
			'headers':{
				'content-type':'application/octet-stream',
				'x-rapidapi-host':'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key':'b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2',
				'useQueryString':true
			}
		})
	}

	static _getPlayerById(id) {
		return axios({
			"method":"GET",
			"url":`https://api-nba-v1.p.rapidapi.com/players/playerId/${id}`,
			"headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
			"x-rapidapi-key":"b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2",
			"useQueryString":true
			}
		}).then(res => res.data.api.players);
	}
}
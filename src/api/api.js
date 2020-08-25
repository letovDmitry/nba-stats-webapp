import * as axios from 'axios'
export const gamesAPI = {
    getGames(seasonYear, page) {
        return axios({
            "method":"GET",
            "url":`https://api-nba-v1.p.rapidapi.com/games/seasonYear/${seasonYear}`,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":"b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2",
            "useQueryString":true
            }
        }).then(res => {
            debugger
            return {
                games: res.data.api.games.splice(page * 100 - 100, 100),
                pages: Math.ceil(res.data.api.games.length / 100)
            }
        })
    },
    getSeasonYears() {
        return axios({
            "method":"GET",
            "url":"https://api-nba-v1.p.rapidapi.com/seasons/",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":"b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2",
            "useQueryString":true
            }
            })
            .then( res => res.data.api.seasons)
    }
}
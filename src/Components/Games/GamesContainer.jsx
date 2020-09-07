import React from 'react'
import { APIRequest } from '../../api/api'
import { setGamesAC, setCurrentPageAC, setSeasonYearAC, setSeasonYearsAC } from '../../state-management/reducers/games-reducer'
import { connect } from 'react-redux'
import Games from './Games'

class GamesAPIContainer extends React.Component {
    async componentDidMount() {
        this.props.setGames(await new APIRequest({type: "GET-GAMES", 
        seasonYear: this.props.seasonYear, 
        page: this.props.currentPage
        }))
        this.props.setSeasonYears(await new APIRequest({type: "GET-SEASON-YEARS"}))
    }
    changeCurrentPage = async newCurrentPage => {
        this.props.setCurrentPage(newCurrentPage)
        this.props.setGames(await new APIRequest({type: "GET-GAMES", 
        seasonYear: this.props.seasonYear, 
        page: this.props.currentPage
        }))
    }
    changeSeasonYear = async newSeasonYear => {
        this.props.setSeasonYear(newSeasonYear)
        this.props.setGames(await new APIRequest({type: "GET-GAMES", 
        seasonYear: this.props.seasonYear, 
        page: this.props.currentPage
        }))
    }
    render () {
        return (
            <><Games {...this.props} changeSeasonYear={this.changeSeasonYear} changeCurrentPage={this.changeCurrentPage}/></>
        )
    }
}

const mapStateToProps = state => {
    return {
        games: state.gamesPage.games,
        pages: state.gamesPage.pages,
        currentPage: state.gamesPage.currentPage,
        seasonYear: state.gamesPage.seasonYear,
        seasonYears: state.gamesPage.seasonYears
    }
}

const GamesContainer = connect(mapStateToProps, {setGames: setGamesAC, setCurrentPage: setCurrentPageAC, setSeasonYear: setSeasonYearAC, setSeasonYears: setSeasonYearsAC})(GamesAPIContainer)

export default GamesContainer
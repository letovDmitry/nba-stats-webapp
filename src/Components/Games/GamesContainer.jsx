import React from 'react'
import { gamesAPI } from '../../api/api'
import { setGamesAC, setCurrentPageAC, setSeasonYearAC, setSeasonYearsAC } from '../../state-management/reducers/games-reducer'
import { connect } from 'react-redux'
import Games from './Games'

class GamesAPIContainer extends React.Component {
    componentDidMount() {
        gamesAPI.getGames(this.props.seasonYear, this.props.currentPage).then(data => {
            this.props.setGames(data)
        })
        gamesAPI.getSeasonYears().then(data => this.props.setSeasonYears(data))
    }
    changeCurrentPage = newCurrentPage => {
        gamesAPI.getGames(this.props.seasonYear, this.props.currentPage).then(data => {
            this.props.setGames(data)
        })
        this.props.setCurrentPage(newCurrentPage)
    }
    changeSeasonYear = newSeasonYear => {
        gamesAPI.getGames(this.props.seasonYear, this.props.currentPage).then(data => {
            this.props.setGames(data)
        })
        this.props.setSeasonYear(newSeasonYear)
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
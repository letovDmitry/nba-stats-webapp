import React from 'react'
import { APIRequest } from '../../api/api'
import { setGames, setCurrentPageAC, setSeasonYearAC, setSeasonYears } from '../../state-management/reducers/games-reducer'
import { connect } from 'react-redux'
import Games from './Games'

class GamesAPIContainer extends React.Component {
    async componentDidMount() {
        this.props.setGames(this.props.seasonYear, this.props.currentPage);
        this.props.setSeasonYears()
    }
    
    changeCurrentPage = async newCurrentPage => {
        this.props.setCurrentPage(newCurrentPage)
        this.props.setGames(this.props.seasonYear, this.props.currentPage)
    }
    changeSeasonYear = async newSeasonYear => {
        this.props.setSeasonYear(newSeasonYear)
        this.props.setGames(this.props.seasonYear, this.props.currentPage)
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

const GamesContainer = connect(mapStateToProps, {setGames, setCurrentPage: setCurrentPageAC, setSeasonYear: setSeasonYearAC, setSeasonYears})(GamesAPIContainer)

export default GamesContainer
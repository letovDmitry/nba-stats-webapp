import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setGameData } from './../../state-management/reducers/game-page-reducer'
import GamePage from './GamePage'

class GamePageAPIContainer extends Component {
  componentDidMount() {
    this.props.setGameData(this.props.match.params.gID)
  }
  render() {
    debugger
    return (
      <div>
        <GamePage {...this.props} />
      </div>
    )
  }
}

const GamePageDataComponent = withRouter(GamePageAPIContainer)

const mapStateToProps = state => {
  return {
    info: state.gamePage.gameData
  }
}

export default connect(mapStateToProps, { setGameData })(GamePageDataComponent)
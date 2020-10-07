import React from 'react'
import { connect } from 'react-redux'
import { getPlayerById } from '../../state-management/reducers/search-page-reducer'
import PlayersSearch from './Search'

class SearchAPIContainer extends React.Component {
	searchPlayerById = id => this.props.getPlayerById(id)
	render() {
		return (
			<div>
        <PlayersSearch {...this.props} searchPlayerById={this.searchPlayerById} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		players: state.searchPage.players,
	}
}

const SearchContainer = connect(mapStateToProps, { getPlayerById })(SearchAPIContainer);

export default SearchContainer;
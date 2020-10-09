import React from 'react'
import { connect } from 'react-redux'
import { getPlayerById, getPlayerByFirstName, getPlayerByLastName, } from '../../state-management/reducers/search-page-reducer'
import PlayersSearch from './Search'

class SearchAPIContainer extends React.Component {
	searchPlayerById = id => this.props.getPlayerById(id)
	searchPlayerByFirstName = firstName => this.props.getPlayerByFirstName(firstName)
	searchPlayerByLastName = lastName => this.props.getPlayerByLastName(lastName)
	render() {
		return ( 
			<div>
        <PlayersSearch {...this.props} searchPlayerByLastName={this.searchPlayerByLastName} searchPlayerByFirstName={this.searchPlayerByFirstName} searchPlayerById={this.searchPlayerById} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		players: state.searchPage.players,
	}
}

const SearchContainer = connect(mapStateToProps, { getPlayerById, getPlayerByFirstName, getPlayerByLastName, })(SearchAPIContainer);

export default SearchContainer;
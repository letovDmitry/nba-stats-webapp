import React from 'react'
import c from './App.module.css'
import NavBar from './Components/Nav/Nav'
import { Route } from 'react-router-dom'
import GamesContainer from './Components/Games/GamesContainer'
import PlayersSearch from './Components/Search/Search'
import NewsContainer from './Components/News/NewsContainer'
import SearchContainer from './Components/Search/SearchContainer'
import GamePage from './Components/GamePage/GamePage'

function App() {
	return (
		<div className={c.appWrapper}>
			<div>
				<NavBar />
			</div>
			<div className={c.content}>
				<Route path="/feed" render={() => <NewsContainer />} />
				<Route path="/games" render={() => <GamesContainer />} />
				<Route path="/game:uID?" render={() => <GamePage />} />
				<Route path="/players" render={() => <SearchContainer />} />

			</div>
		</div>
	)
}

export default App

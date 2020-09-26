import React from 'react'
import c from './App.module.css'
import NavBar from './Components/Nav/Nav'
import { Route } from 'react-router-dom'
import GamesContainer from './Components/Games/GamesContainer'
import PlayersSearch from './Components/Search/Search'
import NewsContainer from './Components/News/NewsContainer'
import SearchContainer from './Components/Search/SearchContainer'

function App() {
	return (
		<div className={c.appWrapper}>
			<div className={c.tab}>
				{/* <img className={c.tabImg} src='https://cdn.nba.net/nba-drupal-prod/2017-08/Twitter-seo-image-NBA-logman.jpg'></img> */}
			</div>
			<div>
				<NavBar />
			</div>
			<div className={c.content}>
				<Route path="/feed" render={() => <NewsContainer />} />
				<Route path="/games" render={() => <GamesContainer />} />
				<Route path="/players" render={() => <SearchContainer />} />

			</div>
		</div>
	)
}

export default App

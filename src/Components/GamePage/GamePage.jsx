import React from 'react'
import { Typography } from 'antd';
import { Card } from 'antd'
import 'antd/dist/antd.css'

const { Title } = Typography;

/*
		EndOfPeriod: "0"
arena: "Vivint Smart Home Arena"
city: "Salt Lake City"
clock: ""
country: "USA"
currentPeriod: "4/4"
endTimeUTC: "2019-07-02T00:50:00.000Z"
gameDuration: "1:47"
gameId: "6300"
hTeam: {teamId: "7", shortName: "CLE", fullName: "Cleveland Cavaliers", nickName: "Cavaliers", logo: "", …}
halftime: "0"
league: "utah"
seasonStage: "2"
seasonYear: "2019"
startTimeUTC: "2019-07-01T23:00:00.000Z"
statusGame: "Finished"
statusShortGame: "3"
vTeam: {teamId: "31", shortName: "SAS", fullName: "San Antonio Spurs", nickName: "Spurs", logo: "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png", …}
*/ 

const GamePage = props => {
	debugger
	const game = props.info
	return (
		<div style={{ margin: '3rem' }}>
         <Title>Arena: {game.arena}</Title>
         <Title>End of period time: {game.EndOfPeriod}</Title>
         <Title>City: {game.city}</Title>
         <Title>Current period: {game.currentPeriod}</Title>
         <Title>End time: {game.endTimeUTC}</Title>
         <Title>Duration: {game.gameDuration}</Title>
         <Title>Half time: {game.halftime}</Title>
         <Title>Season stage: {game.seasonStage}</Title>
         <Title>Season year: {game.seasonYear}</Title>
         <Title>Start time: {game.startTimeUTC}</Title>
         <Title>Game status: {game.statusGame}</Title>
         <Title>Status of short game: {game.statusShortGame}</Title>
		</div>
	)
}

export default GamePage

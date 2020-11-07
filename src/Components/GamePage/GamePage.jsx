import React from 'react'
import { Typography } from 'antd';
import { Card } from 'antd'
import 'antd/dist/antd.css'

const { Title } = Typography;

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

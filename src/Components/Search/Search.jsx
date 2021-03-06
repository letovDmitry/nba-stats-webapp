import React from 'react'
import 'antd/dist/antd.css'
import c from './Search.module.css'
import { Input } from 'antd'
import { Card } from 'antd'

const { Search } = Input

export default function PlayersSearch(props) {
	const players = props.players.map(el => <div style={{ margin: '20px' }}>
		<Card title={`${el.firstName} ${el.lastName}`}>
			<p>Id: {el.playerId}</p>
			<p>Country: {el.country}</p>
			<p>Born at: {el.dateOfBirth}</p>
			<p>Started playing in NBA: {el.startNba}</p>
			<p>Height: {el.heightInMeters}</p>
			<p>Weight: {el.weightInKilograms}</p>
		</Card>
	</div>)
	return (
		<div>
			<div className={c.searchById}>
				<Search
					placeholder="Search Players By Id"
					onSearch={value => props.searchPlayerById(value)}
					style={{ width: 200 }} />
			</div>
			<div className={c.searchByFirstName}>
				<Search
					placeholder="Search Players By FirstName"
					onSearch={value => props.searchPlayerByFirstName(value)}
					style={{ width: 200 }} />
			</div>
			<div className={c.searchByLastName}>
				<Search
					placeholder="Search Players By LastName"
					onSearch={value => props.searchPlayerByLastName(value)}
					style={{ width: 200 }} />
			</div>
			<div style={{ margin: '4rem' }}>
				{ players }
			</div>
		</div>
	)
}

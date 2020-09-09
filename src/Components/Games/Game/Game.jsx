import React from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import c from './Game.module.css'
import { NavLink } from 'react-router-dom';



const Game = props => {
    let winner;
    let loser;
    if (Number(props.hTeam.score.points) > Number(props.vTeam.score.points)) {
        winner = props.hTeam
        loser = props.vTeam
    } else {
        winner = props.vTeam
        loser = props.hTeam
    }
    return ( 
        <div>
            <Card title={props.arena}  extra={<NavLink to={`/game/${props.id}`}>Show Details</NavLink>} style={{ width: 300 }}>
                <p>Arena: <span className={c.property}>{props.arena}</span></p>
                <p>City: <span className={c.property}> {props.city}</span></p>
                <p>League: <span className={c.property}>{props.league}</span></p>
                <p>Duration: <span className={c.property}>{props.duration}</span></p>
                <p>Country: <span className={c.property}>{props.country}</span></p>
                <Card type="inner" title="Winner">
                    <img className={c.logo} src={winner.logo}/>
                    <p>{winner.fullName}</p>
                </Card>    
                <p>{`${winner.score.points}:${loser.score.points}`}</p> 
                <Card type="inner" title="Loser">
                    <img className={c.logo} src={loser.logo}/>
                    <p>{loser.fullName}</p>
                </Card>
            </Card>  
            
        </div>
    )
}

export default Game;
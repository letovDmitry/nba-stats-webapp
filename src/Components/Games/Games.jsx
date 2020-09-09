import React from 'react'
import Game from './Game/Game'
import c from './Games.module.css'
import { Row, Col, Pagination, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';


const Games = props => {
    const seasonElements = props.seasonYears ? props.seasonYears.map(s => <Menu.Item><a onClick={e => props.changeSeasonYear(Number(e.target.textContent))}>{s}</a></Menu.Item>) : null
    const gamesElements = props.games.map(g => <Col span={6}>
            <Game 
                hTeam={g.hTeam} 
                vTeam={g.vTeam} 
                arena={g.arena} 
                city={g.city} 
                country={g.country} 
                league={g.league} 
                duration={g.gameDuration} 
                id={g.gameId}/>
        </Col>)
    const menu = (
        <Menu>{seasonElements}</Menu>
    )
    return (
        <div className={c.wrapper}>
            <div className={c.pagination}>
                <Pagination responsive={true} defaultCurrent={1} onChange={page => props.changeCurrentPage(page)} total={props.pages * 10} />
            </div>
            <div className={c.popup}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {props.seasonYear} <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <Row gutter={[16, 30]}>
                {gamesElements}
            </Row>
        </div>
    )
}

export default Games;
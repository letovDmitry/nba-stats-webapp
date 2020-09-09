import React from 'react'
import c from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd'

const NavBar = props => {
    return (
        <div className={c.navWrapper}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><NavLink className={c.link} activeClassName={c.active} to="/feed"><img src="../../logo.svg"/></NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink className={c.link} activeClassName={c.active} to="/games">Games</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink className={c.link} activeClassName={c.active} to="/players">Players</NavLink></Menu.Item>
                
            </Menu> 
        </div>
    )
}

export default NavBar;
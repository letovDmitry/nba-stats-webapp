import React from 'react'
import 'antd/dist/antd.css';
import c from './Search.module.css'
import { Input } from 'antd';

const { Search } = Input;

export default function PlayersSearch() {
    return (
        <div>
            <div className={c.searchById}>
                <Search
                placeholder="Search Players By Id"
                onSearch={value => console.log(value)}
                style={{ width: 200 }} />
            </div>
            <div className={c.searchByFirstName}>
                <Search
                placeholder="Search Players By FirstName"
                onSearch={value => console.log(value)}
                style={{ width: 200 }} />
            </div>
            <div className={c.searchByLastName}>
                <Search
                placeholder="Search Players By LastName"
                onSearch={value => console.log(value)}
                style={{ width: 200 }} />
            </div>
        </div>
    )
}

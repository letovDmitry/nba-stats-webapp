import React from 'react'
import 'antd/dist/antd.css';
import c from './Search.module.css'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

export default function PlayersSearch() {
    return (
        <div>
            <div classname={c.searchById}>
                <Search
                placeholder="Search Players By Id"
                onSearch={value => console.log(value)}
                style={{ width: 200 }} />
            </div>
            <div classname={c.searchByFirstName}>
                <Search
                placeholder="Search Players By FirstName"
                onSearch={value => console.log(value)}
                style={{ width: 200 }} />
            </div>
            <div classname={c.searchByLastName}>
                <Search
                placeholder="Search Players By LastName"
                onSearch={value => console.log(value)}
                style={{ width: 200 }} />
            </div>
        </div>
    )
}

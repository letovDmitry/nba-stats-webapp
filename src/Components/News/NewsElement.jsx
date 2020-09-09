import React from 'react'
import { Card } from 'antd'
import { NavLink } from 'react-router-dom';

function NewsElement(props) {
    return (
        <div>
            <Card title={props.title}  extra={<a href={`${props.url}`}>Show Details</a>} style={{ width: 300 }}>
                <p>Author: {props.author}</p>
                <p>Created at: {props.date}</p>
                <p>{props.description}</p>
                <p>{props.content}</p>
                <img style={{ height: "140px", }} src={props.img}/>
            </Card>  
            
        </div>
    )
}

export default NewsElement;

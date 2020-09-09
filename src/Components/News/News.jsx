import React from 'react'
import NewsElement from './NewsElement'
import { Col, Row } from 'antd'

function News(props) {
    const newsElements = props.articles.map(el => <Col span={6}><NewsElement title={el.title} 
    author={el.author} 
    url={el.url} 
    date={el.publishedAt} 
    content={el.content} d
    escription={el.description}
    img={el.urlToImage}
    /></Col>)
    return (
        <div style={{ margin: "20px" }}>
            <Row gutter={[16, 30]}>
                {newsElements}
            </Row>
        </div>
    )
}

export default News


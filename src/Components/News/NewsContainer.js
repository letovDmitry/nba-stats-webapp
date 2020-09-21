import React from 'react'
import { connect } from 'react-redux'
import { setArticles } from '../../state-management/reducers/news-reducer'
import News from './News'


class NewsAPIContainer extends React.Component {
	componentDidMount() {
		this.props.setArticles()
	}
	render() {
		return (
			<div>
				<News articles={this.props.articles}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		articles: state.newsPage.news,
	}
}

const NewsContainer = connect(mapStateToProps, { setArticles })(NewsAPIContainer)

export default NewsContainer



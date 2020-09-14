import React from 'react';
import { connect } from 'react-redux';
import { setArticlesAC } from '../../state-management/reducers/news-reducer';
import News from './News';
import { APIRequest } from '../../api/api';

class NewsAPIContainer extends React.Component {
	async componentDidMount() {
		debugger;
		this.props.setArticles(await new APIRequest({ type: 'GET-NEWS' }));
	}
	render() {
		debugger;
		return (
			<div>
				<News articles={this.props.articles}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		articles: state.newsPage.news,
	};
};

const NewsContainer = connect(mapStateToProps, { setArticles: setArticlesAC, })(NewsAPIContainer);

export default NewsContainer;



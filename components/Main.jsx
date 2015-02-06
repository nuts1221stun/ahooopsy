/** @jsx React.DOM */

var React = require('react');
var categoryMock = require('../data/categoryMock');
var Header = require('./Header.jsx');
var Promotion = require('./Promotion.jsx');

module.exports = Main = React.createClass({
	render: function(){
	    return (
			<div id='main'>
				<Header />
				<Popular />
				<Category />
				<Promotion />
			</div>
	    )
	}
});

var Popular = React.createClass({
	render: function() {
		return (
			<div id='popular'>
				<div className='title'>熱門精選 SOP</div>
				<div className='col-sm-9 p-0 left'>
					<div className='left-image'>
						<div className='image'></div>
					</div>
				</div>
				<div className='col-sm-3 p-0 right'>
					<div className='right-image'>
						<div className='right-top'>
							<div className='image'></div>
						</div>
						<div className='right-bottom'>
							<div className='image'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

var Category = React.createClass({
	render: function() {
	var categories = categoryMock.map(function(ctgry, idx){
		return (
			<div key={idx} >
				<div className='categoryTitle'>{ctgry.category}</div>
				<Article article={ctgry.article} />
			</div>
		);
	});
	return (
		<div id='category' className='col-sm-9 p-0'>
			{categories}
		</div>
	);
	}
});

var Article = React.createClass({
	render: function() {
		var items = this.props.article.map(function(artc, idx){
			return (
				<div className='item col-sm-6 p-0' key={idx}>
					<div className='image col-sm-6 p-0'>
					</div>
					<div className='text col-sm-6 p-0'>
						<div className='title'>{artc.title}</div>
						<span className='view'>
							<span className="glyphicon glyphicon-eye-open icon"></span>
							{artc.view}
						</span>
						<span className='like'>
							<span className="glyphicon glyphicon-heart icon"></span>
							{artc.like}
						</span>
						<div className='summary'>{artc.summary}</div>
					</div>
				</div>
			);
		});
		return (
			<div className='article'>
				{items}
			</div>
		);
	}
});
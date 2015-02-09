/** @jsx React.DOM */

var React = require('react');
var categoryMock = require('../data/categoryMock');
var popularMock = require('../data/popularMock');
var Header = require('./Header.jsx');
var Promotion = require('./Promotion.jsx');

module.exports = Main = React.createClass({
	render: function(){
	    return (
			<div id='main'>
				<Header />
				<Popular />
				<div className='col-sm-9 p-0'>
					<Category />
				</div>
				<div className='col-sm-3 p-0'>
					<Promotion />
				</div>
			</div>
	    )
	}
});

var Popular = React.createClass({
	render: function() {
		var thumbnails = popularMock.thumbnail;
		return (
			<div id='popular'>
				<div className='popular-title'>熱門精選 SOP</div>
				<div className='col-sm-9 p-0 popular-left'>
					<div className='popular-left-image'>
						<div className='popular-image'>
							<Carousel />
						</div>
					</div>
				</div>
				<div className='col-sm-3 p-0 popular-right'>
					<div className='popular-right-image'>
						<div className='popular-right-top'>
							<div className='popular-image'>
								<a className='popular-image-wrap'>
									<img src={thumbnails[0].image} alt={thumbnails[0].title}/>
								</a>
							</div>
						</div>
						<div className='popular-right-bottom'>
							<div className='popular-image'>
								<a className='popular-image-wrap'>
									<img src={thumbnails[1].image} alt={thumbnails[1].title}/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
var Carousel = React.createClass({
	render: function() {
		var items = popularMock.carousel.map(function(item, idx){
			return (
				<a className='item active' key={idx}>
					<img className='img-responsive' src={item.image} alt={item.title} />
				</a>
			);
		});
		return (
			<div className='carousel slide' data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li data-target='#myCarousel' data-slide-to='0' className='active'></li>
					<li data-target='#myCarousel' data-slide-to='1'></li>
					<li data-target='#myCarousel' data-slide-to='2'></li>
					<li data-target='#myCarousel' data-slide-to='3'></li>
				</ol>

				<div className='carousel-inner' role='listbox'>
					{items}
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
					<div className='category-name'>
						<span className={ctgry.icon}></span>
						<a className='category-name-text'>{ctgry.category}</a>
						<a className='category-name-more'>看更多<span className='glyphicon glyphicon-menu-right category-name-more-icon'></span></a>
					</div>
					<Article article={ctgry.article} />
				</div>
			);
		});
	return (
		<div id='category'>
			{categories}
		</div>
	);
	}
});

var Article = React.createClass({
	render: function() {
		var items = this.props.article.map(function(artc, idx){
			return (
				<div className='category-item col-sm-6 p-0' key={idx}>
					<a className='category-image col-sm-6 p-0'>
						<img src={artc.image} className='' />
					</a>
					<div className='category-text col-sm-6 p-0'>
						<div className='category-title-wrapper'>
							<div className='category-title'>{artc.title}</div>
							<span className='category-view'>
								<span className='glyphicon glyphicon-eye-open category-icon'></span>
								{artc.view}
							</span>
							<span className='category-like'>
								<span className='glyphicon glyphicon-heart category-icon'></span>
								{artc.like}
							</span>
						</div>
						<div className='category-summary'>{artc.summary}</div>
					</div>
				</div>
			);
		});
		return (
			<div>
				{items}
			</div>
		);
	}
});
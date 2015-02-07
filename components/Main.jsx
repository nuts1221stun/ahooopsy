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
								<div className='popular-image-wrap'>
									<img src='https://farm8.staticflickr.com/7298/16455061772_8a185a14ea_n.jpg' alt='a'/>
								</div>
							</div>
						</div>
						<div className='popular-right-bottom'>
							<div className='popular-image'>
								<div className='popular-image-wrap'>
									<img src='https://farm8.staticflickr.com/7293/16273529487_4e568dfc8e_n.jpg' alt='a'/>
								</div>
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
		return (
			<div className='carousel slide' data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li data-target='#myCarousel' data-slide-to='0' className='active'></li>
					<li data-target='#myCarousel' data-slide-to='1'></li>
					<li data-target='#myCarousel' data-slide-to='2'></li>
					<li data-target='#myCarousel' data-slide-to='3'></li>
				</ol>

				<div className='carousel-inner' role='listbox'>
					<div className='item active'>
					  <img className='img-responsive' src='https://farm8.staticflickr.com/7395/16266928938_cc01ebda72_c.jpg' alt='a'/>
					</div>

					<div className='item'>
					  <img className='img-responsive' src='https://farm8.staticflickr.com/7405/16454731571_bde46f4550_c.jpg' alt='b'/>
					</div>

					<div className='item'>
					  <img className='img-responsive' src='https://farm8.staticflickr.com/7357/16457981625_377125619e_c.jpg' alt='c'/>
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
				<a className='category-name'>
					<span className='category-name-text'>{ctgry.category}</span>
					<span className='category-name-more'>看更多<span className='glyphicon glyphicon-menu-right category-name-more-icon'></span></span>
				</a>
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
				<div className='category-item col-sm-6 p-0' key={idx}>
					<div className='category-image col-sm-6 p-0'>
					</div>
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
/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.jsx');
var Promotion = require('./Promotion.jsx');

var ArticleBannerLeft = React.createClass({
    render: function () {
        return <div className="article-banner-left">
                   <div className="big-class">
                       <span className="glyphicon glyphicon-road"></span>
                       <div className="big-class-text">交通</div>
                    </div>
                   <div className="glyphicon glyphicon-chevron-right"></div>
                   <div className="small-class">車禍</div>
               </div>;
    }
});

var ArticleBanner = React.createClass({
    render: function () {
        return <div className="article-banner">
                   <ArticleBannerLeft />
               </div>;
    }
});

var ArticleMainImage = React.createClass({
    render: function () {
        return <div className="main-image-container">
                   <img src="http://static.ettoday.net/images/16/d16449.jpg" width="100%" />
               </div>;
    }
});

var ArticlePage = React.createClass({
    render: function () {
        return <div id="main">
                   <Header />
                   <div className="col-sm-9 p-0 article" id="article">
                       <ArticleBanner />
                       <ArticleMainImage />
                   </div>
                   <div className="col-sm-3 p-0">
                       <Promotion />
                   </div>
               </div>;
    }
});

module.exports = ArticlePage;
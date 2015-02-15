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

var ArticleBannerRight = React.createClass({
    render: function () {
        return <div className="article-banner-right">
                   <div className="left-thumb">
                       <span className="glyphicon glyphicon-thumbs-up"></span>
                       <span>419</span>
                   </div>
                   <div className="right-thumb">
                       <span className="glyphicon glyphicon-thumbs-down"></span>
                       <span>3</span>
                   </div>
               </div>;
    }
});

var ArticleBanner = React.createClass({
    render: function () {
        return <div className="article-banner">
                   <ArticleBannerLeft />
                   <ArticleBannerRight />
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

var TagBlock = React.createClass({
    render: function () {
        return <div className="tag-block">
                   <div className="tag-entry">台北市交通大隊</div>
                   <div className="tag-entry">車禍</div>
               </div>;
    }
});

var ArticleMainContainer = React.createClass({
    render: function () {
        return <div className="article-main-container">
                   <TagBlock />
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
                       <ArticleMainContainer />
                   </div>
                   <div className="col-sm-3 p-0">
                       <Promotion />
                   </div>
               </div>;
    }
});

module.exports = ArticlePage;
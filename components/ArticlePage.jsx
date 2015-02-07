/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.jsx');

var ArticlePage = React.createClass({
    render: function () {
        return <div id="main">
                   <Header />
                   <div>Here is Article page</div>
               </div>;
    }
});

module.exports = ArticlePage;
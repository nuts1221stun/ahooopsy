/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
		<div id='header'>
			<div className='col-sm-6 p-0 text-left'>Yahoo SOP</div>
			<div className='col-sm-6 p-0 text-right'>login</div>
		</div>
    )
  }

});
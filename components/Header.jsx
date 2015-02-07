/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
		<div id='header'>
			<div className='col-sm-6 p-0 text-left'>
				<a className='header-logo'>Yahoo SOP</a>
			</div>
			<div className='col-sm-6 p-0 text-right'>
				<div className='header-right'>
					<div className='header-user'>
						<a className='header-user-avatar'>
							<img src='https://farm8.staticflickr.com/7204/6847705437_5b00a2f959_s.jpg' className='img-circle' />
						</a>
						<a className='glyphicon glyphicon-triangle-bottom header-user-setting'></a>
					</div>
					<div className='input-group header-search'>
						<span className='input-group-addon'><span className='glyphicon glyphicon-search'></span></span>
						<input type='text' className='form-control input-sm'  placeholder='搜尋 SOP...' />
					</div>
				</div>
			</div>
		</div>
    )
  }

});
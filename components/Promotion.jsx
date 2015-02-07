/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	render: function(){
		return (
			<div id='promotion' id='promotion' className='col-sm-3 p-0'>
				<PopularSearch/>
				<Ad />
				<Certificated/>
			</div>
		)
	}
});

var PopularSearch = React.createClass({
	render: function() {
		return (
			<div id='popularsearch' className=''>
				<div className='popularsearch-title'>大家最常找什麼？</div>
				<div className='popularsearch-content'>
				   <a href='' className='tag fz-24'>國際學生證</a>  
				   <a href='' className='tag fz-12'>美簽</a>  
				   <a href='' className='tag fz-22'>租屋</a>  
				   <a href='' className='tag fz-14'>領養狗狗</a>  
				   <a href='' className='tag fz-26'>歸鄉</a>  
				   <a href='' className='tag fz-24'>汽車保養</a>  
				   <a href='' className='tag fz-14'>過年大掃除</a>  
				   <a href='' className='tag fz-12'>考駕照</a>  
				   <a href='' className='tag fz-18'>換機油</a>  
				   <a href='' className='tag fz-28'>抽一般替代役</a>  
				   <a href='' className='tag fz-14'>車禍</a>  
				   <a href='' className='tag fz-12'>申請研替</a>  
				   <a href='' className='tag fz-12'>被詐騙</a>  
				   <a href='' className='tag fz-18'>爬玉山</a>  
				</div>
			</div>
		);
	}
});

var Certificated = React.createClass({
	render: function() {
		return (
			<div id='certificated' className=''>
				<div className='certificated-title'>專家認證</div>
				<div className='certificated-content'>
					<a href='' className='tag fz-12'>國際學生證</a>  
					<a href='' className='tag fz-14'>買保險</a>  
					<a href='' className='tag fz-20'>租屋</a>  
					<a href='' className='tag fz-18'>領養狗狗</a>  
					<a href='' className='tag fz-12'>歸鄉</a>  
					<a href='' className='tag fz-14'>汽車保養</a>  
					<a href='' className='tag fz-18'>過年大掃除</a>  
					<a href='' className='tag fz-28'>考駕照</a>  
					<a href='' className='tag fz-18'>遺失手機</a>  
					<a href='' className='tag fz-22'>買房子</a>  
					<a href='' className='tag fz-12'>車禍</a>  
					<a href='' className='tag fz-12'>申請研替</a>  
					<a href='' className='tag fz-26'>被詐騙</a>  
					<a href='' className='tag fz-12'>爬雪山</a> 
				</div>
			</div>
		);
	}
});

var Ad = React.createClass({
	render: function() {
		return (
			<div className='ad'>
				<img src='' />
			</div>
		);
	}
});
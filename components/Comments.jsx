/** @jsx React.DOM */

var React = require('react');

var defaultImgUrl = "https://farm8.staticflickr.com/7204/6847705437_5b00a2f959_s.jpg";

var data = {
	comments: [
		{
			author: 'Swifty',
			imageUrl: defaultImgUrl,
			message: '這真是太扯了！！'
		},
		{
			author: 'Emily',
			imageUrl: defaultImgUrl,
			message: '明天又要上班了'
		},
		{
			author: 'Tom',
			imageUrl: defaultImgUrl,
			message: '為什麼一定要拍照！'
		}
	]
};

var Comment = React.createClass({
	render: function() {
		return (
			<div>
				<img className="img-circle header-user-avatar" src={this.props.imageUrl} />
				<div>{this.props.message}</div>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<div>
				<img className="img-circle" src={defaultImgUrl} />
				<div>
					<input placeholder="我要留言..." />
					<div>以 Swifty 身份</div>
					<button>留言</button>
				</div>
			</div>
		);
	}
});

var CommentsList = React.createClass({
	render: function() {
		var comments = this.props.comments.map(function(comment, i) {
			return <Comment key={i} author={comment.author} imageUrl={comment.imageUrl} message={comment.message} />;
		});

		return (
			<div>
				{comments}
			</div>
		);
	}
});

var Comments = React.createClass({
	getInitialState: function() {
		return data;
	},

    render: function () {
        return (
        	<div>
	        	<CommentForm />
	        	<CommentsList comments={this.state.comments} />
        	</div>
        );
    }
});

module.exports = Comments;
module.exports = React.createClass({
	propTypes:{
		likeData:React.PropTypes.object
	},
	getInitialState:function(){
		return {
			liked:this.props.likeData.get("likedByUser")
		};
	},
	likeUnlike:function(){
		this.state.liked ? Actions.unlike(this.props.likeData.get("userId")) : Actions.like(this.props.likeData.get("userId"));
		this.setState({
			liked:!this.state.liked
		});
	},
	render:function(){
		return (
			<span className="span4 entry-like">
				<span className="like">
					<span className="glyphicon glyphicon-thumbs-up" onClick={this.likeUnlike} aria-hidden="true">{this.state.liked ? "Unlike" : "Like"}</span>
					<span className="like-count" data-rel="tooltip" data-html="true">
						<span className="glyphicon glyphicon-heart"></span>
						{this.props.likeData.get("numOfLikes") || 0}
					</span>
				</span>
			</span>);
	}
});
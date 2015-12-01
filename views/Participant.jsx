var classNames = require("classnames");
var _ = require("underscore");
var LikeButton = require("../views/LikeButton");
module.exports = React.createClass({
	getInitialState:function(){
		return {
			expanded:true
		}
	},
	rowClicked:function(){
		this.setState({
			expanded:!this.state.expanded
		});
	},
	getExpandedRow:function(expandCollapseClasses){
		var likeData = _.find(this.props.likes,l=>l.userId === this.props.participantData._id);
		return (<tr>
					<th onClick={this.rowClicked}><span className={expandCollapseClasses} onClick={this.rowClicked}></span></th>
					<td>{this.props.participantData.name}</td>
					<td>{this.props.participantData.age}</td>
					<td>{this.props.participantData.gender}</td>
					<td><LikeButton likeData={likeData || {}}/></td>
				</tr>);
	},
	getCollapsedRow:function(expandCollapseClasses){
		return (<tr>
			<th></th>
			<td><span className={expandCollapseClasses} onClick={this.rowClicked}></span></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>);
		
	},
	render:function(){
		var expandCollapseClasses = classNames({
			"glyphicon":true,
			"glyphicon-minus":this.state.expanded,
			"glyphicon-plus":!this.state.expanded
		})
		return this.state.expanded ? 
			this.getExpandedRow(expandCollapseClasses) : this.getCollapsedRow(expandCollapseClasses);
	}
});
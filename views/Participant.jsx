var classNames = require("classnames");
var _ = require("underscore");
var LikeButton = require("../views/LikeButton");
var ParticipantMixin = require("../mixins/ParticipantMixin");
var PureRenderMixin = require("react-addons-pure-render-mixin");
var Immutable = require("immutable");
module.exports = React.createClass({
	mixins:[ParticipantMixin,PureRenderMixin],
	getExpandedRow:function(expandCollapseClasses){
		var likeData = this.props.likesData.find(l=>l.get("userId") === this.props.participantData.get("_id"));
		return (<tr>
					<th onClick={this.rowClicked}><span className={expandCollapseClasses} onClick={this.rowClicked}></span></th>
					<td>{this.props.participantData.get("name")}</td>
					<td>{this.props.participantData.get("age")}</td>
					<td>{this.props.participantData.get("gender")}</td>
					<td><LikeButton likeData={likeData || Immutable.Map()}/></td>
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
		console.log("participant render");
		var expandCollapseClasses = classNames({
			"glyphicon":true,
			"glyphicon-minus":this.state.expanded,
			"glyphicon-plus":!this.state.expanded
		})
		return this.state.expanded ? 
			this.getExpandedRow(expandCollapseClasses) : this.getCollapsedRow(expandCollapseClasses);
	}
});
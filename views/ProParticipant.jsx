var _ = require("underscore");
var ParticipantMixin = require("../mixins/ParticipantMixin");
var PureRenderMixin = require("react-addons-pure-render-mixin");
module.exports = React.createClass({
	mixins:[ParticipantMixin,PureRenderMixin],
	getExpandedRow:function(){
		return (<tr>
					<th onClick={this.rowClicked}><span className="glyphicon glyphicon-minus" onClick={this.rowClicked}></span></th>
					<td>{this.props.participantData.get("name")}</td>
					<td>{this.props.participantData.get("age")}</td>
					<td>{this.props.participantData.get("gender")}</td>
					<td>{this.props.participantData.get("sponsor")}</td>
				</tr>);
	},
	getCollapsedRow:function(){
		return (<tr>
			<th onClick={this.rowClicked}><span className="glyphicon glyphicon-plus"></span></th>
			<td>PRO user</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>);
		
	},
	render:function(){
		console.log("render pro user");
		return this.state.expanded ? 
			this.getExpandedRow() : this.getCollapsedRow();
	}
});
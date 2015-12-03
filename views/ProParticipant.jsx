var _ = require("underscore");
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
	getExpandedRow:function(){
		var likeData = _.find(this.props.likes,l=>l.userId === this.props.participantData._id);
		return (<tr>
					<th onClick={this.rowClicked}><span className="glyphicon glyphicon-minus" onClick={this.rowClicked}></span></th>
					<td>{this.props.participantData.name}</td>
					<td>{this.props.participantData.age}</td>
					<td>{this.props.participantData.gender}</td>
					<td>{this.props.participantData.sponsor}</td>
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
		return this.state.expanded ? 
			this.getExpandedRow() : this.getCollapsedRow();
	}
});
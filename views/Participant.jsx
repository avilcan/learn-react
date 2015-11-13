var classNames = require("classnames");
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
		return (<tr onClick={this.rowClicked}>
					<th></th>
					<td></td>
					<td>{this.props.participantData.name}</td>
					<td>{this.props.participantData.age}</td>
					<td>{this.props.participantData.gender}</td>
					<td><span className={expandCollapseClasses} onClick={this.rowClicked}></span></td>
				</tr>);
	},
	getCollapsedRow:function(expandCollapseClasses){
		return (<tr>
			<th></th>
			<td></td>
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
		return (<tr onClick={this.rowClicked}>
					<th></th>
					<td></td>
					<td>{this.props.participantData.name}</td>
					<td>{this.props.participantData.age}</td>
					<td>{this.props.participantData.gender}</td>
					<td></td>
				</tr>)
	}
});
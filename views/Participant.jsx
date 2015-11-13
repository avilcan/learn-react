module.exports = React.createClass({
	render:function(){
		return (<tr>
					<th></th>
					<td></td>
					<td>{this.props.participantData.name}</td>
					<td>{this.props.participantData.age}</td>
					<td>{this.props.participantData.gender}</td>
					<td></td>
				</tr>)
	}
});